import Image from 'next/image'

export default function Logo() {
    return (
        <div className="w-10">
            <Image src={'/images/logo.png'} alt="Rugters Logo" width={264} height={236} />
        </div>
    )
}
