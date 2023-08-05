import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidators {

    static InvalidTextValTest(control: AbstractControl) {
        const val = control.value as string;
        if (val.includes("test")) {
            return {
                invalidTextContainingTest : true
            };
        }
        return null;
    }

    static wordsNotAllowed(...notAllowedWords : string[]) {
        return (control: AbstractControl) => {
            const val = control.value as string;
            for(const notAllowedWord of notAllowedWords) {
                if (val.includes(notAllowedWord)) {
                    return {
                        notAllowedWordMatched: notAllowedWord
                    };
                }
            }
            return null;
        }
    }

    static shouldHaveLargeTag(control: FormGroup) {
        const amount = control.get("amount")?.value as number;
        const tags = control.get("metadata.tags")?.value as {tagVal: string}[];
        console.log(tags);
        
        if (amount >= 10000 && !CustomValidators.hasNeededWordInTag(tags, 'large')) {
            return {
                doesNotIncludeLargeTag: true
            }
        }
        return null;
    }

    static shouldHaveLateTag(control: FormGroup) {
        const expenseDate = new Date(control.get("expenseDate")?.value);
        const tags = control.get("metadata.tags")?.value as {tagVal: string}[];
        if ((Date.now() - expenseDate.getTime()) / (1000 * 3600 * 24) >= 10 &&  !CustomValidators.hasNeededWordInTag(tags, 'late')) {
            // for learning purpose we 
            // we can set error on specific field
            control.get("metadata.tags")?.setErrors({
                doesNotIncludeLateTag: true
            }); 
        }
    }

    private static hasNeededWordInTag(tags: {tagVal: string}[], word: string): boolean {
        let anyContainsNeededWord = false;
        for(const tag of tags) {
            if (tag.tagVal.includes(word)) {
                anyContainsNeededWord = true;
                break;
            }
        }
        return anyContainsNeededWord;
    }

}
