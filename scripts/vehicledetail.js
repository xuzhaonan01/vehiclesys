var base = {};

var mainpageInit = function()
{
    LoadBaseBar();
};

function LoadBaseBar(){
    base = new Vue({
        el:"#detail",
        data:{
            year:'2019',
            make:'make',
            model:'model',
            color:'color',
            body_style:'body_style',
            vin:'vin',
            plate:'plate',
            engine_no:'engine_no',
            chasssis:'chasssis',
            vehicle_type:'vehicle_type',
            seats:'seats',
            cc_rating:'cc_rating',
            fuel_type:'fuel_type',
            transmission:'transmission',
            assembly_type:'assembly_type',
            ori_country:'ori_country',
            vehicle_eq_class:'vehicle_eq_class',
            model_code:'model_code',
            mass:'mass'
        },
        methods: {
            insert:function(obj){
                this.year = obj.year;
                this.make = obj.make;
                this.model = obj.model;
                this.color = obj.color;
                this.body_style = obj.body_style;
                this.vin = obj.vin;
                this.plate = obj.plate;
                this.engine_no = obj.engine_no;
                this.chasssis = obj.chasssis;
                this.vehicle_type = obj.vehicle_type;
                this.seats = obj.seats;
                
                this.cc_rating = obj.cc_rating;
                this.fuel_type = obj.fuel_type;
                this.transmission = obj.transmission;
                this.assembly_type = obj.assembly_type;
                this.ori_country = obj.ori_country;
                this.vehicle_eq_class = obj.vehicle_eq_class;
                this.model_code = obj.model_code;
                this.mass = obj.mass;
            }
        }
    })
}