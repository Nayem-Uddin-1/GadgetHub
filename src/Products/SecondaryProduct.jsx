import React, { useState } from 'react'
import Container from '../components/common/Container/Container'
import { Prods } from '../api/productApi';
import TextArea from './SeconParts/TextArea';
import ImageArea from './SeconParts/ImageArea';


function SecondaryProduct({ data }) {

    return (
        <Container>
            <div className="flex gap-5 mt-10">
                {
                    Prods.map((item, i) => (
                        <div className='w-[300px] h-[468px] p-2 bg-white rounded group border ' >
                            <ImageArea />
                            <TextArea />
                        </div>
                    ))

                }
            </div>
        </Container>
    )
}

export default SecondaryProduct