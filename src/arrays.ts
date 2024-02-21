/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const numLen = numbers.length;
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        const doubled = [...numbers, ...numbers];
        return doubled;
    }
    const newArray = [...numbers];
    newArray.splice(1, numLen - 2);
    return newArray;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((val: number): number => val * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const converted = numbers.map((val: string): number => parseInt(val));
    const invalidInt = (val: number): boolean => Number.isNaN(val);
    const convertedTrim = converted.map((val: number): number =>
        invalidInt(val) ? (val = 0) : val
    );
    return convertedTrim;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const dollarSignCheck = (val: string): boolean => val.indexOf("$") === 0;
    const noSigns = amounts.map((val: string): string =>
        dollarSignCheck(val) ? (val = val.substring(1)) : val
    );
    const converted = noSigns.map((val: string): number => parseInt(val));
    const validInt = (val: number): boolean => Number.isNaN(val);
    const convertedTrim = converted.map((val: number): number =>
        validInt(val) ? (val = 0) : val
    );
    return convertedTrim;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shoutCheck = (val: string): boolean =>
        val.charAt(val.length - 1) === "!";
    const questionCheck = (val: string): boolean =>
        val.charAt(val.length - 1) !== "?";
    const shouts = messages.map((val: string): string =>
        shoutCheck(val) ? (val = val.toUpperCase()) : val
    );
    const noQs = shouts.filter(questionCheck);
    return noQs;
};
/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const fourLengthCheck = (val: string): boolean => val.length < 4;
    const shorties = words.filter(fourLengthCheck);
    return shorties.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const redCheck = (val: string): boolean => val !== "red";
    const blueCheck = (val: string): boolean => val !== "green";
    const greenCheck = (val: string): boolean => val !== "blue";
    const noReds = colors.filter(redCheck);
    const noBlues = noReds.filter(blueCheck);
    const noGreens = noBlues.filter(greenCheck);
    if (noGreens.length >= 1) {
        return false;
    } else {
        return true;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const sumString = sum.toString().concat("=");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const findFirstNegative = (values: number[]) =>
        values.findIndex((num: number) => num < 0);
    const negIndex = findFirstNegative(values);
    if (negIndex > 0) {
        const firstClip = values.splice(negIndex, values.length - negIndex);
        const sum = firstClip.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const final = values.splice(negIndex + 1, 0, sum);
        console.log(final);
        console.log(firstClip);
        return final;
    } else {
        const sum2 = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const final2 = [...values, sum2];
        console.log(final2);
        return final2;
    }
}
