import Blobity, { Options } from './Blobity';
import { useEffect, useRef } from 'react';

export default Blobity;
export const useBlobity = (options: Partial<Options>) => {
    const instance = useRef<Blobity | null>(null);

    useEffect(() => {
        if (!instance.current) {
            instance.current = new Blobity(options);
        }
    }, []);

    return instance.current;
};
