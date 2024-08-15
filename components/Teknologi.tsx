import Image from "next/image";
import ImgTensorflow from "@/public/tensorflow.jpg";
import imgGCP from "@/public/gcp.png";
import imgAndroid from "@/public/android.png";

export default function Teknologi() {
  return (
    <div
      id="Teknologi"
      className="lg:w-full lg:h-auto lg:py-20 lg:px-14 py-10 px-4"
    >
      <div className="lg:w-[1200px] lg:mx-auto">
        <h1 className="lg:w-full font-bold text-4xl text-center lg:mb-20 mb-10">
          Teknologi Yang Digunakan
        </h1>
        <div className="flex flex-col gap-8 lg:gap-14">
          <div className="lg:flex lg:flex-row lg:gap-12 flex flex-col gap-2">
            <Image
              src={ImgTensorflow}
              alt="Tensorflow"
              className="lg:w-6/12 w-full"
            />
            <div className="lg:w-6/12 flex flex-col lg:gap-8 gap-4 lg:my-auto ">
              <h1 className="text-4xl font-bold">Tensorflow Keras</h1>
              <p>
                TensorFlow Keras adalah library AI yang digunakan dalam aplikasi
                Bloomy untuk mendeteksi kesegaran ikan. Dengan menggunakan
                TensorFlow Keras, Bloomy dapat membangun dan melatih model
                jaringan saraf yang menganalisis faktor penampilan dan tekstur
                untuk menentukan kesegaran ikan.
              </p>
              <a
                href="https://www.tensorflow.org/guide/keras"
                className="font-semibold"
              >
                Learn More →
              </a>
            </div>
          </div>
          <div className="lg:flex lg:flex-row lg:gap-12 flex flex-col-reverse gap-4">
            <div className="lg:w-6/12 flex flex-col lg:gap-8 gap-4 lg:my-auto">
              <h1 className="text-4xl font-bold">Google Cloud Platform</h1>
              <p>
                Google Cloud Platform (GCP) digunakan dalam Bloomy sebagai
                infrastruktur awan untuk menyimpan dan mengelola data aplikasi.
                GCP membantu Bloomy dalam menyimpan data historis harga ikan,
                faktor-faktor pasar, dan parameter lain yang digunakan dalam
                prediksi harga ikan. Selain itu, GCP juga menyediakan layanan
                komputasi yang diperlukan dalam proses analisis dan prediksi
                harga.
              </p>
              <a href="https://cloud.google.com/" className="font-semibold">
                Learn More →
              </a>
            </div>
            <Image src={imgGCP} alt="Tensorflow" className="lg:w-6/12" />
          </div>
          <div className="lg:flex lg:flex-row lg:gap-12 flex flex-col gap-0">
            <Image
              src={imgAndroid}
              alt="Android"
              className="lg:w-6/12 w-full"
            />
            <div className="lg:w-6/12 flex flex-col lg:gap-8 gap-4 lg:my-auto ">
              <h1 className="text-4xl font-bold">Android</h1>
              <p>
                Android Kotlin adalah bahasa pemrograman yang digunakan dalam
                pengembangan aplikasi Bloomy yang dapat diakses melalui platform
                Android. Dengan menggunakan Kotlin, Bloomy menyediakan antarmuka
                pengguna yang intuitif dan mudah digunakan bagi nelayan untuk
                menjual dan membeli ikan di marketplace. Kotlin juga
                memungkinkan Bloomy untuk memberikan rekomendasi keputusan
                berlayar berdasarkan prediksi harga, permintaan pasar, dan
                faktor-faktor lainnya kepada para nelayan.
              </p>
              <a
                href="https://developer.android.com/kotlin"
                className="font-semibold"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
