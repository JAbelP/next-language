'use client'

import {useParams} from 'next/navigation';
import {useTransition} from 'react';
import {Locale, usePathname, useRouter} from '@/i18n/routing';

type Props = {
    selectedLanguageString:string // selected language
}

export default function LanguageSwitchButton({
    selectedLanguageString
}: Props){

    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();
    const params = useParams();

    function selectedLanguage(){
        const nextLocal = selectedLanguageString // this needs to be the language passed in
        startTransition(() =>{
            router.replace(
                // @ts-expect-error
                {pathname, params},
                {locale: nextLocal}
            )
        })
    }

    return(
        <button onClick={selectedLanguage} disabled={isPending}>
            {selectedLanguageString} please 
        </button>
    )
}


