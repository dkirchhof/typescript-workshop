interface IPerson {
    firstname: string;
    lastname: string;
}

export function transformMeTS(transform: "toUpperCase" | "toLowerCase", me: IPerson) {
    return Object
        .entries(me)
        .reduce((transformed, [key, value]) => ({
            ...transformed,
            [key]: value[transform](),
        }), { }) as IPerson;
}
