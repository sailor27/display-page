export function formatHTML(string) {
    const ampRegex = /&amp;/;
    const quotRegex = /&quot;/;
    
    return string.replace(quotRegex, '"').replace(ampRegex, '&');
}
