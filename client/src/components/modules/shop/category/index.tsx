'use client'
import { NMTable } from "@/components/ui/core/NMTable"
import CreateCategoryModal from "./CreateCategoryModal"
import { ICategory } from "@/types"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { toast } from "sonner"
import { deleteCategory } from "@/services/Category"

type TCategoriesProps = {
  categories: ICategory[]
}[]
const ManageCategory = async ({ categories }: { categories: TCategoriesProps[] }) => {

  const handleDelete = async(id: string) => {
    const res = await deleteCategory(id);
    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message)
    }
  }
  const columns: ColumnDef<TCategoriesProps>[] = [
    {
      accessorKey: "name",
      header: () => <div className="text-lg text-neutral-800"> Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <Image src={row.original?.icon}
            alt={row.original?.name}
            width={100}
            height={100}
            className="w-10 h-10 rounded-full"
          />
          <span>{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "isActive",
      header: "Is Active",
    },
    {
      accessorKey: "_id",
      header: () => <div className="text-lg text-neutral-800">Action</div>,
      cell: ({ row }) => (
        <div className="flex">
          <Button onClick={() => handleDelete(row.original._id)}>
            <Trash />
          </Button>
        </div>
      )
    },
  ]
  return (
    <div>
      <div className="flex items-center justify-between gap-5 py-3 px-4 border rounded">
        <h1 className="text-xl font-medium text-neutral-600">Manage Category</h1>
        <CreateCategoryModal />
      </div>
      <div className="mt-5">
        <NMTable data={categories} columns={columns} />
      </div>
    </div>
  )
}

export default ManageCategory
