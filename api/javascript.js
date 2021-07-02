import React from 'react';
import { useRouter } from 'next/router';

export const jsDataTypesApi = (props) => {
    const router = useRouter();
    const { fileName } = router.query;
    return (
        <>
            {fileName}
            </>
    )
}