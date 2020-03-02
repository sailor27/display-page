export function formatHTML(string) {
    const ampRegex = /&amp;/;
    const quotRegex = /&quot;/;

    return string.replace(quotRegex, '"').replace(ampRegex, '&');
}

export function isValidUrl(string) {
    const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$',
        'i'
    ); // fragment locator

    return pattern.test(string);
}

export function getDisplayPrice(price, priceRange) {
    if (price.selling) return `$${price.selling}`;
    if (price.regular) return `$${price.regular}`;
    if (priceRange) {
        const {
            selling: {high, low},
        } = priceRange;

        return `$${low} - $${high}`;
    } else return '';
}
