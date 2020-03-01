import {formatHTML} from './utils';

describe('formatHTML', () => {
    test('it should replace markup for ""s', () => {
        expect.assertions(1);

        const mockText = 'Urban Outdoor Sofa (81&quot;)';
        const result = 'Urban Outdoor Sofa (81")';

        expect(formatHTML(mockText)).toBe(result);
    });

    test('it should replace markup for &s and "', () => {
        expect.assertions(1);

        const mockText = 'Mexa Outdoor Lounge Chair (81&quot;) &amp; Ottoman Set';
        const result = 'Mexa Outdoor Lounge Chair (81") & Ottoman Set';

        expect(formatHTML(mockText)).toBe(result);
    });
});
