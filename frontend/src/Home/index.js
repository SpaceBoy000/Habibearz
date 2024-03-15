import bannerImg from "../assets/images/banner.png";

export default function Home() {
    return (
        <div className="p-8">
            <div className="flex">
                <div className='text-left'>
                    <p className="text-[#F6CE0E] uppercase">welcome to HabibearZ</p>
                    <p>Meet HBEARZ, Not All bears are bad! Some Have Hearts.</p>
                    <p>A Hyper Deflationary DeFi Meme coin which gives you access to the Habibears Metaverse.<br/> Come along the journey and be part of this self-sustaining ecosystem that drives its value to a sustainable model.</p>
                </div>
                <div>
                    <img src={bannerImg}/>
                </div>
            </div>
        </div>
    );
}