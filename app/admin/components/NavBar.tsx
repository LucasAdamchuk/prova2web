import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ModeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Cable, DoorClosed, User } from "lucide-react";
import { MenuNav } from "./MenuNav";
import { MenuSheet } from "./MenuSheet";


export default function NavBar() {
    return (
        <div className="flex justify-between p-6 border-b-2">
            <img  src="/img/utfpr2.png" className="hidden lg:block size-[7%] lg:size-[10%]"/>    
             
             <MenuSheet/>
             
             <MenuNav/>

            <div className="flex space-x-4">
                <ModeToggle />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src="" alt="@shadcn" />
                            <AvatarFallback>LJA</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                            <User/> <label>Usuário</label>
                        </DropdownMenuItem>
                        <DropdownMenuItem >
                            <DoorClosed/><label>Sair</label>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Cable/> <label>Conexões</label>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </div>
    )
}