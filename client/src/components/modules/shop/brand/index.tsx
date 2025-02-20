import CreateBrandModal from './CreateBrandModal'

const ManageBrand = () => {
  return (
    <div>
        <div className="flex items-center justify-between gap-5 py-3 px-4 border rounded">
        <h1 className="text-xl font-medium text-neutral-600">Manage Brand</h1>      
        <CreateBrandModal/>
        </div>
    </div>
  )
}

export default ManageBrand
