import { useEffect, useState } from 'react'
import { Alert, Button, Card, Checkbox, Col, Input, Modal, Radio, Row, Select, Space, Typography } from 'antd'
import Paragraph from 'antd/es/typography/Paragraph'
import { useAppDispatch } from 'hooks/reduxHooks'
import { changeHeaderTitle } from 'store/slice/CommonSlice'
import { InfoCircleOutlined } from '@ant-design/icons'
import { applepayIcon, bankIcon, googlePayIcon, reviwIcon } from 'assets/imgs'

const { Title, Text } = Typography

const InstantSupport = () => {
  const [viewSupport, setViewSupport] = useState(false)
  const [upgradePlan, setUpgradePlan] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [selectedAddOn, setSelectedAddOn] = useState<string | null>(null)
  const [autoRenew, setAutoRenew] = useState(false)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<string>('apple')
  const [isCardModalOpen, setIsCardModalOpen] = useState(false)
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)
  const dispatch = useAppDispatch()

  const handlePaymentChange = (e: any) => {
    setPaymentMethod(e.target.value)
  }


  useEffect(() => {
    dispatch(
      changeHeaderTitle({
        pageTitle: `Instant Support`,
      })
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return (
    <div>
      {!viewSupport && !upgradePlan && (
        <Row align="middle" gutter={[16, 16]} className="relative z-10 instant-support-section">
          <div className="left-side">
            <Title level={2} className="text-white title">
              Instant Support
            </Title>
            <Paragraph className="text-white sub-title">Get instant support for your team when they need it most. Connect with an expert and receive assistance today!</Paragraph>
            <Button
              type="primary"
              onClick={() => {
                setViewSupport(true)
              }}
              className="white-btn"
            >
              Get support
            </Button>
          </div>
            <div className="right-side"></div>
        </Row>
      )}
      {viewSupport && !upgradePlan && (
        <div className="select-plan-section">
          {/* Header */}
          <div className="flex justify-between">
            <Title className="title">Select an add - on plan</Title>
            <Text className="sales-title cursor-pointer">Speak to sales?</Text>
          </div>

          {/* Plan Selection */}
          <Card className="select-plan-card shadow-md mt-4">
            <div className="card-header flex justify-between items-center">
              <Title className="card-title">How many employees do you wish to add to this plan?</Title>
              <Select className="card-select" defaultValue="00 - 000">
                <Select.Option value="00 - 000">00 - 000</Select.Option>
                <Select.Option value="01 - 100">01 - 100</Select.Option>
                <Select.Option value="101 - 500">101 - 500</Select.Option>
              </Select>
            </div>

            <Radio.Group
              className="w-full card-list"
              onChange={(e) => {
                setSelectedPlan(e.target.value)
              }}
            >
              <Space direction="vertical" className="w-full">
                <Card className="w-full flex justify-between">
                  <Radio value="voice" className="plan-list">
                    <Text className="plan-title">Voice calls only</Text>
                    <div className="plan-sub-title">{'24/7 advice line for immediate support.'}</div>
                  </Radio>
                  <div className="plan-yr"><label>---</label>/yr</div>
                </Card>

                <Card className="w-full flex justify-between">
                  <Radio value="video" className="plan-list">
                    <Text className="plan-title">Voice & video calls</Text>
                    <Text className="plan-sub-title">Both voice and video calling options for flexibility.</Text>
                  </Radio>
                  <div className="plan-yr"><label>---</label>/yr</div>
                </Card>

                <Card className="w-full flex justify-between">
                  <Radio value="Face" className="plan-list">
                    <Text className="plan-title">Face to face</Text>
                    <Text className="plan-sub-title">With voice and video calls included.</Text>
                  </Radio>
                  <div className="plan-yr"><label>---</label>/yr</div>
                </Card>
              </Space>
            </Radio.Group>
          </Card>

          {/* Extra Add-ons */}
          <Title className="mt-6 ex-add-title">
            Extra add-on
          </Title>
          <Radio.Group
            className="card-list extra-card-list"
            onChange={(e) => {
              setSelectedAddOn(e.target.value)
            }}
          >
            <Space direction="vertical" className="w-full">
              <Card className="w-full flex justify-between">
                <Radio value="Legal" className="plan-list">
                  <Text className="plan-title">Legal & financial advice</Text>
                  <Text className="plan-sub-title">This add-on is available for all plans.</Text>
                </Radio>
                <div className="plan-yr">£<label>--</label></div>
              </Card>

              <Card className="w-full flex justify-between">
                <Radio value="Doctor’s" className="plan-list">
                  <Text className="plan-title">Doctor’s advice</Text>
                  <Text className="plan-sub-title">This add-on is available for all plans.</Text>
                </Radio>
                <div className="plan-yr">£<label>--</label></div>
              </Card>
            </Space>
          </Radio.Group>

          {/* Upgrade Plan Button (Enable only when both are selected) */}
          <div className="flex">
          <Button
            type="primary"
            className="btn-primary mt-6"
            disabled={!selectedPlan || !selectedAddOn}
            onClick={() => {
              setUpgradePlan(true)
            }}
          >
            Upgrade plan
          </Button>
          </div>
        </div>
      )}
      {upgradePlan && (
        <div className="select-plan-section">
        {/* Header */}
        <div className="flex justify-between">
          <Title className="title">Select an add - on plan</Title>
        </div>
        <div className="alert-box">
          <div className="info-icon">
            <InfoCircleOutlined />
          </div>
          <Text>This payment is an add-on and does not affect your existing Shoorah subscription. Regular subscription payments, such as monthly charges, will continue as usual.</Text>
        </div>
        {/* <Alert
            message="This payment is an add-on and does not affect your existing Shoorah subscription."
            description="Regular subscription payments, such as monthly charges, will continue as usual."
            type="info"
            showIcon
            className="mb-4"
          /> */}
        {/* Plan Selection */}
        <Card className="select-plan-card shadow-md mt-4">
          <div className="card-header flex justify-between items-center">
            <Title className="card-title">How many employees do you wish to add to this plan?</Title>
            <Select className="card-select" defaultValue="00 - 000">
              <Select.Option value="00 - 000">00 - 000</Select.Option>
              <Select.Option value="01 - 100">01 - 100</Select.Option>
              <Select.Option value="101 - 500">101 - 500</Select.Option>
            </Select>
          </div>

          <Radio.Group
            className="w-full card-list"
            onChange={(e) => {
              setSelectedPlan(e.target.value)
            }}
          >
            <Space direction="vertical" className="w-full">
              <Card className="w-full flex justify-between">
                <div className="plan-list">
                  <Text className="plan-title">Voice calls only</Text>
                  <div className="plan-sub-title">This accommodates 10-40 employees, with voice calls only </div>
                </div>
                <div className="plan-yr"><label>£60</label>/yr</div>
              </Card>
            </Space>
          </Radio.Group>
        </Card>
          <div className="border"></div>
        <Card className="payment-card">
          <div className="w-full flex justify-between">
            <Text className="payment-title">
            Total Payment:
            </Text>
            <Text className="payment-right">£14</Text>
          </div>
          <div className="payment-border"></div>
          {/* Auto Renew */}
          <Radio.Group
            className="block mt-4"
            onChange={(e) => {
              setAutoRenew(e.target.value)
            }}
            value={autoRenew}
          >
            <Radio className="payment-plan" value="yes">Auto Renew your plan</Radio>
          </Radio.Group>
        </Card>

        {/* Upgrade Plan Button (Enable only when both are selected) */}
        <div className="flex">
          <Button
            type="primary"
            className="btn-primary mt-6"
            disabled={!selectedPlan || !selectedAddOn}
            onClick={() => {
              setIsPaymentModalOpen(true)
            }}
          >
            Pay £250 
          </Button>
        </div>
      </div>
        
      )}
      {/* Payment Methods Modal */}
      <Modal
        title="Payment methods"
        open={isPaymentModalOpen}
        onCancel={() => {
          setIsPaymentModalOpen(false)
        }}
        footer={null}
        centered
      >
        <Radio.Group className="block payment-method" value={paymentMethod} onChange={handlePaymentChange}>
          <Card className={`flex justify-between items-center ${paymentMethod === "apple" ? 'payment-method-selected' : ''}`}>
            <Radio value="apple">
              <div className="payment-method-item flex items-center">
                <div className="icon">
                  <img src={applepayIcon} alt="icon" />
                </div>
                <div className="payment-list">
                  <div className="payment">Reuben Hale</div>
                  <div className="payment">Reuben Hale - 8473</div>

                </div>
              </div>
            </Radio>
            {paymentMethod === 'apple' && <Button className="border-btn edit-btn" type="link">Edit</Button>}
          </Card>
          <Card>
            <Radio value="google">
              <div className="payment-method-item">
                <div className="icon">
                  <img src={googlePayIcon} alt="icon" />
                </div>
                <div className="payment-list">Google Pay</div>
              </div>
            </Radio>
            {paymentMethod === 'google' && <Button type="link">Edit</Button>}
          </Card>
          <Card>
            <Radio value="bank">
              <div className="payment-method-item">
                <div className="icon">
                  <img src={bankIcon} alt="icon" />
                </div>
                <div className="payment-list">Bank Transfer</div>
              </div>
            </Radio>
            {paymentMethod === 'bank' && <Button type="link">Edit</Button>}
          </Card>
        </Radio.Group>

        {/* Modal Footer Buttons */}
        <div className="flex mt-6">
          <Button
          className="add-card-btn"
            onClick={() => {
              setIsPaymentModalOpen(false)
              setIsCardModalOpen(true)
            }}
          >
            Add a new card
          </Button>
          <Button
            className="btn-surveys"
            type="primary"
            onClick={() => {
              setIsPaymentModalOpen(false)
            }}
          >
            My Surveys
          </Button>
        </div>
      </Modal>

      {/* Add New Card Modal */}
      <Modal
        title="Add a new card"
        open={isCardModalOpen}
        onCancel={() => {
          setIsCardModalOpen(false)
        }}
        footer={null}
        centered
      >
        <div className="card-form-section">
          <div className="input-field">
            <Text className="input-title">Cardholder's Name</Text>
            <Input placeholder="John Doe" className="mb-2" />
          </div>
          <div className="input-field">
            <Text className="input-title">Card Number</Text>
            <Input placeholder="0000-0000-0000-0000" className="mb-2" />
          </div>

          <Row gutter={8}>
            <Col span={12}>
              <div className="input-field">
                <Text className="input-title">Exp Month</Text>
                <Input placeholder="00/00" className="mb-2" />
              </div>
            </Col>
            <Col span={12}>
            <div className="input-field">
              <Text className="input-title">Exp Year</Text>
              <Input placeholder="000" className="mb-2" />
            </div>
            </Col>
          </Row>
          <div className="input-field">
            <Text className="input-title">CVC Number</Text>
            <Input placeholder="000" className="mb-4" />
          </div>

          <Button
            type="primary"
            className="add-card-primary primary-btn "
            onClick={() => {
              setIsCardModalOpen(false)
              setIsReviewModalOpen(true)
            }}
          >
            Add your card
          </Button>
        </div>
      </Modal>
      <Modal
        open={isReviewModalOpen}
        onCancel={() => {
          setIsReviewModalOpen(false)
        }}
        footer={null}
        centered
        className="review-modal"
      >
        <div style={{ textAlign: 'center' }}>
          <img src={reviwIcon} alt="Review" style={{ width: 80 }} />
          <p className="payment-review-text">Your payment is currently under review.</p>
          <p className="payment-review-text">This process typically takes 24-48 hours.</p>

          <Button
          className="got-btn"
            type="primary"
            onClick={() => {
              setIsReviewModalOpen(false)
            }}
          >
            Got it!
          </Button>
        </div>
      </Modal>
    </div>
  )
}
export default InstantSupport