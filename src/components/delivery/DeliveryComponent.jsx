import React, { useState, useEffect } from 'react'
import { BaseLayout, CheckBox, TextField, Flex, TextArea } from '../shared'
import { HiArrowLeft } from 'react-icons/hi'
import {
    BackButton,
    GridContainer,
    FormSection,
    SummarySection,
    HeadLeftSection,
    HeadLeftTitle,
    TitleBorder,
    FormContainer
} from '../SharedStyled'
import SummaryComponent from '../summary/SummaryComponent'
import { useForm } from 'react-hook-form'
import { clearStorage } from '../../utils/storage'
import { handleInput } from '../../utils/helpers'
import PropTypes from 'prop-types'

function DeliveryComponent ({
    data,
    isDisable,
    dropShip,
    cost,
    fee,
    total,
    changeStatus = () => { }
}) {
    const { handleSubmit, resetField, register, watch, setValue, setError, formState: { errors }, getValues } = useForm({
        defaultValues: {
            email: '',
            phone: '',
            address: '',
            dropPhone: '',
            dropName: ''
        },
        shouldUnregister: false,
        mode: 'all'
    })

    const values = getValues()
    const handleDisable = () => {
        changeStatus()
        resetField('dropName')
        resetField('dropPhone')
        clearStorage(['dropName', 'dropPhone'])
    }

    const watchAddress = watch('address')

    const handleInputExtra = (type, val) => {
        if (type === 'dropName') {
            ;
            setValue('dropName', val)
            handleInput('dropName', val)
        } else {
            setValue('dropPhone', val)
            handleInput('dropPhone', val)
        }
    }


    useEffect(() => {
        setValue('email', data.email !== null ? data.email : '')
        setValue('address', data.address !== null ? data.address : '')
        setValue('phone', data.phone !== null ? data.phone : '')
        setValue('dropName', data.dropName !== null ? data.dropName : '')
        setValue('dropPhone', data.dropPhone !== null ? data.dropPhone : '')
    }, [])

    return (
        <BaseLayout>
            <BackButton >
                <HiArrowLeft />
                Back to cart
            </BackButton>
            <GridContainer>
                <FormSection>
                    <HeadLeftSection>
                        <div>
                            <HeadLeftTitle>
                                Delivery Details
                            </HeadLeftTitle>
                            <TitleBorder />
                        </div>
                        <CheckBox onClick={handleDisable} />
                    </HeadLeftSection>
                    <form>
                        <FormContainer>
                            <Flex
                                align='flex-start'
                                direction='column'
                                justify='flex-start'
                                gap='2'
                            >

                                <TextField
                                    id='email'
                                    label='Email'
                                    name='email'
                                    type='text'
                                    value={values.email}
                                    register={register}
                                    validation={{
                                        onChange: (e) => {
                                            handleInput('email', e.target.value)
                                            const validate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value)
                                            if (!validate) return setError('email')
                                        },
                                        required: true,
                                        validate: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value),
                                        pattern: {
                                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                            message: 'format email salah'
                                        }
                                    }}
                                    error={errors?.email}
                                    isValid={!errors?.email && values.email !== '' && typeof values.email !== 'undefined' ? true : false}
                                />
                                <TextField
                                    label='Phone Number'
                                    id='phone'
                                    name='phone'
                                    type='number'
                                    value={values.phone}
                                    register={register}
                                    validation={{
                                        onChange: (e) => {
                                            handleInput('phone', e.target.value)
                                            const validate = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g.test(e.target.value)
                                            if (!validate) return setError('phone')
                                        },
                                        required: 'this is required',
                                        validate: (value) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g.test(value),
                                        pattern: {
                                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
                                            message: 'format no hp salah'
                                        }
                                    }}
                                    error={errors?.phone}
                                    isValid={!errors?.phone && values.phone !== '' && typeof values.phone !== 'undefined' ? true : false}
                                />
                                <TextArea
                                    label='Address'
                                    id='address'
                                    name='address'
                                    value={values.address}
                                    register={register}
                                    validation={{
                                        onChange: (e) => { handleInput('address', e.target.value) },
                                        required: 'this is required',
                                        validate: {
                                            checkLength: (value) => value.length <= 120
                                        },
                                        maxLength: {
                                            value: 120,
                                            message: 'too much word'
                                        }
                                    }}
                                    error={errors?.address || watchAddress.length > 120}
                                    isValid={!errors?.address && values.address !== '' && typeof values.address !== 'undefined' ? true : false}
                                    watch={watchAddress}
                                />
                            </Flex>

                            <Flex
                                align='flex-start'
                                direction='column'
                                justify='flex-start'
                                gap='2'
                            >
                                <TextField
                                    label='Dropshipper Name'
                                    id='dropName'
                                    name='dropName'
                                    type='text'
                                    value={values.dropName}
                                    isDisable={isDisable}
                                    register={register}
                                    watch={watch('dropName')}
                                    validation={{
                                        onChange: (e) => { handleInputExtra('dropName', e.target.value) },
                                        required: isDisable ? false : true
                                    }}
                                    error={errors?.dropName}
                                    isValid={!errors?.dropName && values.dropName !== '' && typeof values.dropName !== 'undefined' ? true : false}
                                />
                                <TextField
                                    label='Dropshipper phone number'
                                    id='dropPhone'
                                    name='dropPhone'
                                    type='number'
                                    watch={watch('dropPhone')}
                                    value={values.dropPhone}
                                    register={register}
                                    isDisable={isDisable}
                                    validation={{
                                        onChange: (e) => {
                                            handleInputExtra('dropPhone', e.target.value)
                                            const validate = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g.test(e.target.value)
                                            if (!validate) return setError('dropPhone')
                                        },
                                        required: isDisable ? false : true,
                                        validate: (value) => /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g.test(value),
                                        pattern: {
                                            value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
                                            message: 'format no hp salah'
                                        }
                                    }}
                                    error={errors?.dropPhone}
                                    isValid={!errors?.dropPhone && values.dropPhone !== '' && typeof values.dropPhone !== 'undefined' ? true : false}
                                />
                            </Flex>
                        </FormContainer>
                    </form>
                </FormSection>
                <SummarySection>
                    <SummaryComponent
                        dropShip={dropShip}
                        cost={cost}
                        fee={fee}
                        total={total}
                        values={values}
                    />
                </SummarySection>
            </GridContainer>
        </BaseLayout>
    )
}

DeliveryComponent.propTypes = {
    data: PropTypes.object,
    changeStatus: PropTypes.func,
    isDisable: PropTypes.bool,
    dropShip: PropTypes.bool,
    cost: PropTypes.number,
    fee: PropTypes.number,
    total: PropTypes.any
}

export default DeliveryComponent