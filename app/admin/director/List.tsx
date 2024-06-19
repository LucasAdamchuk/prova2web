import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { revalidatePath } from "next/cache";
  
  
  interface IStudent {
    id:number,
    nome:string,
    email:string
  }

  export default async function ListStudent() {
    const students = await list()
    async function list(){
     revalidatePath("/admin/student")
     const response = await fetch("https://server20241-sage.vercel.app/director");
     return response.json();
    }

    return (
      <Table>
        <TableCaption>Lista de Diretores</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Endereço</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((item:IStudent) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.nome}</TableCell>
              <TableCell>{item.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
      </Table>
    )
  }
  