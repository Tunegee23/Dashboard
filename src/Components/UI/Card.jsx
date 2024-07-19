import { Card } from 'antd';
const Box = ({numbers, text}) => (
  <Card
    style={{
      width: 250,
      
      
    }}
  >
    <div className='flex' >
      <div className='h-[50px] w-[50px] bg-red-400 rounded-full flex justify-center items-center text-1xl'>icon</div>
      <div className='px-6'>
        <h3 className='text-3xl text-bold'>{numbers}</h3>
        <p className='text-gray-400  '>{text}</p>
      </div>
    </div>


  </Card>
);
export default Box;