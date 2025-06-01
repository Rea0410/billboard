import React, { useState } from 'react'
import { CButton, CModal, CModalHeader, CModalBody, CModalFooter, CCarousel, CCarouselItem, CImage } from '@coreui/react'

const OutdoorBillboardModal = () => {
  const [visible, setVisible] = useState(false)
  const OutdoorBillboardModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  }

  return (
    <>
      <CButton color="primary" onClick={() => setVisible(true)}>View Outdoor Billboard</CButton>

      <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
        <CModalHeader>
          <strong>Outdoor Billboard Features</strong>
        </CModalHeader>
        <CModalBody>
          <h5>📌 Features:</h5>
          <ul>
            <li>Prime location visibility</li>
            <li>Backlit for night-time visibility</li>
            <li>Waterproof and weatherproof</li>
          </ul>

          <h5>💰 Pricing:</h5>
          <p>₱25,000 per month</p>

          <h5>📸 Sample Billboards:</h5>
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage className="d-block w-100" src="/sample-billboard-1.jpg" alt="Billboard 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-100" src="/sample-billboard-2.jpg" alt="Billboard 2" />
            </CCarouselItem>
          </CCarousel>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>Close</CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default OutdoorBillboardModal
