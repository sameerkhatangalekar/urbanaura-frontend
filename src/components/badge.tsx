
type BadgeProps = {
    cartItemsCount: Number
}

const Badge = ({ cartItemsCount }: BadgeProps) => {
    return (
        <div className="right-0 absolute flex bg-orange-500 rounded-full w-4 h-4 max-sm:w-3 max-sm:h-3 text-white text-[12px] items-center justify-center text-center ">
            {cartItemsCount.toString()}
        </div>
    )
}

export default Badge