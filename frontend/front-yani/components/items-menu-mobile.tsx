import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {  Menu } from "lucide-react";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
       <Popover>
        <PopoverTrigger>
         <Menu />
        </PopoverTrigger>
        <PopoverContent>
            <Link href="/category/Sets" className="block" > Sets</Link>
            <Link href="/category/Buzos" className="block"> Buzos</Link>
            <Link href="/category/Polleras" className="block"> Polleras</Link>
            <Link href="/category/Pantalones" className="block"> Pantalones</Link>
            <Link href="/category/Remeras" className="block"> Remeras</Link>
            <Link href="/category/Camperas" className="block"> Camperas</Link>
        </PopoverContent>
       </Popover>
    );
}

export default ItemsMenuMobile;