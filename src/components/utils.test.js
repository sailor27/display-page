import {formatHTML, isValidUrl} from './utils';

describe('formatHTML', () => {
    test('should replace markup for ""s', () => {
        expect.assertions(1);

        const mockText = 'Urban Outdoor Sofa (81&quot;)';
        const result = 'Urban Outdoor Sofa (81")';

        expect(formatHTML(mockText)).toBe(result);
    });

    test('should replace markup for &s and "', () => {
        expect.assertions(1);

        const mockText =
            'Mexa Outdoor Lounge Chair (81&quot;) &amp; Ottoman Set';
        const result = 'Mexa Outdoor Lounge Chair (81") & Ottoman Set';

        expect(formatHTML(mockText)).toBe(result);
    });
});

describe('isValidUrl', () => {
    test('should return false for invalid url', () => {
        expect.assertions(1);
        expect(isValidUrl('')).toBe(false);
    });

    test('should return true for valid url', () => {
        expect.assertions(1);
        const mockUrl =
            'https://www.westelm.com/weimgs/ab/images/wcm/products/202004/0011/coastal-outdoor-lounge-chair-m.jpg';
            
        expect(isValidUrl(mockUrl)).toBe(true);
    });
});
