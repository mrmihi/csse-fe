import { Button } from "@/components/ui/button";
import SupplierOrderTable from "./supplierOrdersTable";
import SupplierDeliveryTable from "./supplierDeliveryTable";
import { Sidebar } from "./sideBar";
import { Menu } from "./menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardPage from "./main/page";

const Supplier = () => {
  // const [activeTable, setActiveTable] = useState("orders");

  // const showOrderTable = () => setActiveTable("orders");
  // const showDeliveriesTable = () => setActiveTable("deliveries");

  return (
    <>
      <div className="hidden md:block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="orders" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="orders" className="relative">
                          Orders
                        </TabsTrigger>
                        <TabsTrigger value="deliveries">Deliveries</TabsTrigger>
                        <TabsTrigger value="live">Summary</TabsTrigger>
                      </TabsList>
                      <div className="ml-auto mr-4">
                        <Button>
                          {/* <PlusCircledIcon className="mr-2 h-4 w-4" /> */}
                          Add Deliveries
                        </Button>
                      </div>
                    </div>
                    <TabsContent
                      value="orders"
                      className="border-none p-0 outline-none"
                    >
                      <SupplierOrderTable />
                    </TabsContent>
                    <TabsContent
                      value="deliveries"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <SupplierDeliveryTable />
                    </TabsContent>
                    <TabsContent
                      value="live"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <DashboardPage />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supplier;
