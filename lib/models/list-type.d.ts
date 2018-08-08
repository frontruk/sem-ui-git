export interface ListItemType {
    name: string;
    icon: string;
    type: string;
    path?: string;
    active: boolean;
}
export interface ListType {
    items: Array<ListItemType>;
}
