import { Heading } from "./_components/heading";
import { Footer } from "./_components/footer";
import { Heroes } from "./_components/heroes";
const WebPage = () => {
    return ( 
        <div className=" flex flex-col">
            <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
                <Heading />
                <Heroes />
                <Footer />
            </div>
        </div>
     );
}
 
export default WebPage;