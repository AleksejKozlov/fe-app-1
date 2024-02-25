import { useState } from "react";

export const useLocalStorage = (key: string, defaulValue: unknown = null) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const currentValue = localStorage.getItem(key);
            if (currentValue) {
                return JSON.parse(currentValue);
            } else {
                localStorage.setItem(key, JSON.stringify(defaulValue));
                return defaulValue;
            }
        } catch (err) {
            return defaulValue;
        }
    });
    const setValue = (newValue: string | null): void => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (err) {
            console.log(err);
        }
        setStoredValue(newValue);
    };
    return [storedValue, setValue];
};