import { authModalState } from '@/atoms/authModalAtom'
import { useRecoilState } from 'recoil'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent,
         ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'

import React from 'react'

export default function AuthModal() {
  const [modalState, setModalState] = useRecoilState(authModalState)
  const handleClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false
    }))
  }
  
  return (
    <>
      <Modal isOpen={ modalState.open }
             onClose={ handleClose }>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            Modal Title
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody>
            Here is the modal body
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
