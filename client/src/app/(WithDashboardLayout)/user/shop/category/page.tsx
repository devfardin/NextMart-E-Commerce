import ManageCategory from '@/components/modules/shop/category'
import { getAllCategories } from '@/services/Category'
const CategoryPage = async() => {
  const {data, meta} = await getAllCategories();
  return (
    <div>
      <ManageCategory categories={data}/>
    </div>
  )
}

export default CategoryPage
