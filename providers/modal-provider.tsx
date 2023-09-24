'use client'

import PreviewModal from '@/components/preview-modal'
import useIsMounted from '@/hooks/useIsMounted'

export default function ModalProvider() {
    const isMounted = useIsMounted()
    if(!isMounted) return null
  return (
    <>
        <PreviewModal/>
    </>
  )
}