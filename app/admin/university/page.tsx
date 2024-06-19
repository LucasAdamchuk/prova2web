import { Button } from "@/components/ui/button";
import ListStudent from "./List";


export default function University() {
    return (
        <div className="w-full flex flex-col  mt-6">
            <div className="flex justify-center mb-6">
                <a href="/admin/university/new">
                    <Button>Cadastrar Universidade</Button>
                </a>
            </div>
            <ListStudent />
        </div>
    )
}