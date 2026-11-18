import { site } from '../site';

export interface Post {
  title: string;
  link: string;
  date: Date;
  summary: string;
}

// Pulls your Medium posts at build time, so a rebuild picks up new articles.
// If Medium is unreachable the build still works, the list is just empty.
let cache: Promise<Post[]> | undefined;
export const getPosts = () => (cache ??= load());

const decode = (s: string) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&nbsp;/g, ' ');

const pick = (item: string, tag: string) => {
  const m = item.match(
    new RegExp(`<${tag}>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?</${tag}>`),
  );
  return m ? m[1].trim() : '';
};

async function load(): Promise<Post[]> {
  try {
    const res = await fetch(site.mediumFeed, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const xml = await res.text();
    const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
    return items.map((item) => {
      const text = decode(pick(item, 'content:encoded').replace(/<[^>]+>/g, ' '))
        .replace(/\s+/g, ' ')
        .trim();
      return {
        title: decode(pick(item, 'title')),
        link: pick(item, 'link').split('?')[0],
        date: new Date(pick(item, 'pubDate')),
        summary: text.length > 180 ? `${text.slice(0, 180).trimEnd()}...` : text,
      };
    });
  } catch (err) {
    console.warn(`[medium] could not load the feed, writing list will be empty (${err})`);
    return [];
  }
}
