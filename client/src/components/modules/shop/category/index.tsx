import CreateCategoryModal from "./CreateCategoryModal"
import { ICategory } from "@/types"

type TCategoriesProps ={
  categories: ICategory[]
}
const ManageCategory = async ({categories}: {categories: TCategoriesProps}) => {
  return (
    <div>
        <div className="flex items-center justify-between gap-5 py-3 px-4 border rounded">
        <h1 className="text-xl font-medium text-neutral-600">Manage Category</h1>      
        <CreateCategoryModal/>
        </div>
    </div>
  )
}

export default ManageCategory
