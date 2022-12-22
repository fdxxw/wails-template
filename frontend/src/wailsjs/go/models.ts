export namespace main {
	
	export class DBConfig {
	    host: string;
	    port: string;
	    user: string;
	    pass: string;
	    db: string;
	
	    static createFrom(source: any = {}) {
	        return new DBConfig(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.host = source["host"];
	        this.port = source["port"];
	        this.user = source["user"];
	        this.pass = source["pass"];
	        this.db = source["db"];
	    }
	}
	export class Influxdb {
	    host: string;
	    user: string;
	    pass: string;
	    db: string;
	
	    static createFrom(source: any = {}) {
	        return new Influxdb(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.host = source["host"];
	        this.user = source["user"];
	        this.pass = source["pass"];
	        this.db = source["db"];
	    }
	}
	export class UnitDataGeneratorCfg {
	    pg: DBConfig;
	    influxdb: Influxdb;
	    initDate: string;
	    factor: number[];
	    customerCode: string;
	    rootInnerCode: string;
	    start: string;
	    end: string;
	    gap: string;
	
	    static createFrom(source: any = {}) {
	        return new UnitDataGeneratorCfg(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.pg = this.convertValues(source["pg"], DBConfig);
	        this.influxdb = this.convertValues(source["influxdb"], Influxdb);
	        this.initDate = source["initDate"];
	        this.factor = source["factor"];
	        this.customerCode = source["customerCode"];
	        this.rootInnerCode = source["rootInnerCode"];
	        this.start = source["start"];
	        this.end = source["end"];
	        this.gap = source["gap"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

