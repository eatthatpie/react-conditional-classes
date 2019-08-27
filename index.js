import { useState, useEffect } from 'react';

export const useClassNames = function(classNamesObject) {
    const [classNamesString, setClassNamesString] = useState('');

    useEffect(() => {
        let classNamesArray = [];

        Object.keys(classNamesObject).forEach(className => {
            if (classNamesObject[className]) {
                classNamesArray.push(className);
            }
        });

        setClassNamesString(classNamesArray.join(' '));
    }, [classNamesObject]);

    return classNamesString;
}