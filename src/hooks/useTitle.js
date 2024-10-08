import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} / News cinema`
    });
    return null;
}

export default useTitle
