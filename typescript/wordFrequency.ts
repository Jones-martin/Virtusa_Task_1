function countWordFrequencies(paragraph: string): Map<string, number> {

    const map = new Map<string, number>();

    const words = paragraph.split(" ");

    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    return map;
}

const text = "Hello world! Hello TypeScript, welcome to TypeScript world.";
const frequencies = countWordFrequencies(text);

frequencies.forEach((count, word) => {
    console.log(`${word}: ${count}`);
});
