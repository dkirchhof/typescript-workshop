interface ITest {
    someString: string;
    someNumber: number;
    someDate: Date;
    someFunction: (a: string, b: number) => string[];
    someOtherFunction: (a: string) => number[];
}

interface ITest2 {
    someOtherString: string;
}

// region intersection type

type t = ITest & ITest2 & { someSymbol: Symbol; };

const f: t = {

}

// endregion

// region union type

type TransformFn = "toUpperCase" | "toLowerCase"; 

function transform(s: string, transformFn: TransformFn) { }

transform("hallo", "");

// endregion

// region datentyp ändern

type ToString<T> = {
    [k in keyof T]: string;
}

type stringifiedProps = ToString<ITest>;

// endregion

// region modifier ändern

type ToOptional<T> = {
    [k in keyof T]?: T[k];
}

type optionalProps = ToOptional<ITest>;
type partialProps = Partial<ITest>;

// endregion

// region conditional

type DateToNumber<T> = {
    [k in keyof T]: T[k] extends Date ? number : T[k];
}

type datesAsNumber = DateToNumber<ITest>;

type WithPromisifiedFns<T> = {
    [k in keyof T]: T[k] extends (...props: infer P) => infer R ? (...props: P) => Promise<R> : T[k];
}

type promisified = WithPromisifiedFns<ITest>;

type FunctionNames<T> = { 
    [k in keyof T]: T[k] extends Function ? k : never; 
}[keyof T];

type functionNames = FunctionNames<ITest>;
type onlyFunctions = Pick<ITest, FunctionNames<ITest>>;

// endregion
