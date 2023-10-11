import { useEffect, useState } from "react"
import { getMostPopular } from "../../services/products.service";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from "../../components/Header/Header";

const MostPopularSlider = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchPopularProducts = async () => {
            const fetchedProducts = await getMostPopular();
            
            if (fetchedProducts) {
                setProducts(fetchedProducts);
            }
        }
        fetchPopularProducts();
    },[])

  return (
    <section className="container mx-auto mt-12">

        <Header title={'Najpopularniejsze produkty'} styles={'text-heading-3 text-typography-text px-[16px]'}/>
        <Header title={'wybierane przez klientów'} styles={'text-body-5 text-typography-subtext px-[16px]'}/>

        <Swiper
            modules={[Scrollbar]}
            spaceBetween={20}
            slidesPerView={5}
            slidesPerGroup={1}
            scrollbar={{ draggable: true, dragClass: 'swiper-scrollbar-drag' }}
        >
            {products && products.map((product, i) => (
                <SwiperSlide 
                    key={i}
                    className="w-16 h-[300px] bg-white flex flex-col justify-center items-center rounded-[15px] hover:cursor-pointer mb-6"
                >
                    <div className="w-full h-2/5 bg-white">
                        <img 
                            src={product.image_url} 
                            alt={product.product_name} 
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="w-full h-1/3 flex justify-center items-center">
                        <span className="text-center text-heading-3">{product.product_name}</span>
                    </div>
                </SwiperSlide>
            ))}
      </Swiper>
    </section>
  )
}

export default MostPopularSlider