/**
 * Service copy writes list items as "**Lead-in.** Rest of the sentence."
 * Cards need those two halves separately; prose does not.
 */
export function splitLead(item: string): { title: string | null; body: string } {
  // [\s\S] rather than the /s flag, which needs an ES2018 target.
  const match = item.match(/^\*\*(.+?)\*\*\s*([\s\S]*)$/);
  if (!match) return { title: null, body: item };
  return { title: match[1].replace(/[.:]$/, ""), body: match[2].trim() };
}
