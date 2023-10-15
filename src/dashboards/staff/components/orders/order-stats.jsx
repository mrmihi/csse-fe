import { Card, CardDescription, CardHeader } from "@/components/ui/card";

const OrderStats = ({title, description}) => {
    return (
        <>
            <Card>
                <CardHeader>{title}</CardHeader>
                <CardDescription className="pb-5">{description}</CardDescription>
            </Card>
        </>
    );
}

export default OrderStats;
