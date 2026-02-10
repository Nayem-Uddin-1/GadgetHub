import React from 'react'
import Breadcrumb from './Breadcrumb'
import Container from '../common/Container/Container'
import ImageArea from '../../Products/SeconParts/ImageArea'




function SingleProduct() {
 
    return (
        <section className='border' >

            <Breadcrumb />
            <Container>
                <h3 className='py-5 text-3xl font-bold' >Pro Phone 13 Pro Demo Mock-up </h3>
                <div className='border-b-3 border-black w-15 '></div>
            </Container>

            <hr className='w-full' />

            <Container>
                <div className="w-[688px] h-[688px] border ">
                    {
                    
                    }
                    <ImageArea className={`h-full`} />
                </div>
            </Container>


            <div className="h-screen"></div>

        </section>
    )
}

export default SingleProduct