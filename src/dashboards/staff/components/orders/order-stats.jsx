import { Card, CardDescription, CardHeader } from "@/components/ui/card";

const OrderStats = ({ title, description }) => {
  return (
    <>
      <Card>
        <CardHeader className="text-center">{title}</CardHeader>
        <CardDescription className="pb-5 text-center">
          {description}
        </CardDescription>
      </Card>
    </>
  );
};

export default OrderStats;
