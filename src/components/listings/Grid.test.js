import data from '../../data/courses.json';

const numItems = data.length;

test('Number of items = 12', () => {
    expect(numItems).toBe(12);
});

test('Number of items to be greater than 12', () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
});