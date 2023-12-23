//The root blog handles multiple types of routes using params
import { useRouter } from 'next/router'
import IndexPage from '../index';
import Modal from '../../components/Modal';
import BlockBookingForm from '../../components/BlockBookingForm';
//export { getStaticProps, default } from '../index';

export default function RentModalPage() {
  const router = useRouter();
  return <>
    <IndexPage />
    <Modal isOpen={true} onClose={()=>router.push('/')}>
      <h1>Our 22yd rolloff dumpster</h1>

      <p>Good choice! Our 22yd rolloff dumpster is XXX and YYY</p>
      <p>Put in your details below and we'll get back to you ASAP!</p>
      <BlockBookingForm />
    </Modal>
  </>
}

// export async function getStaticPaths() {
//   return {
//     paths: Array.from(data.paged(data.sorted(data.posts()))).map((_, idx) => ({
//       params: {
//         page: ''+idx
//       }
//     })),
//     fallback: false
//   };
// }