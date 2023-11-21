import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import pmLanaImage from "@/assets/PM-Lana.png";
export default function SaccessPage() {

    return (
        <Layout>
            <section className="md:flex md:justify-between md:gap-20 mb-10 md:mb-20 max-w-5xl m-auto items-end h-full p-10 md:p-20">
                <div className="flex flex-col md:flex-row gap-10">
                    <div className="basis-1/2">
                        <Image src={pmLanaImage} alt={"PM Lana"}/>
                    </div>
                    <div className="basis-1/2">
                        <h2 className="text-2xl uppercase font-bold text-default mb-10">Оплата пройшла успішно</h2>
                        <p className="mb-5">Вітаю! Ти приймаєш участь у моєму  інтенсиві <b>“Product Management”</b></p>
                        <p className="mb-5">Долучайся внизу за посиланням в чат, де буде проходити навчання</p>
                        <Link href="https://t.me/+Kxp9AXP5BKg2NGQy">
                            <Button inverted>Долучитись до чату</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
    )
}