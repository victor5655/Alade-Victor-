
import { CustomerRecord } from '../types';

export const RAW_CSV_DATA = `Customer ID,Full Name,Date of Purchase,Age,State,MTN Device,Gender,Satisfaction Rate,Customer Review,Customer Tenure in months,Subscription Plan,Unit Price,Number of Times Purchased,Total Revenue,Data Usage,Customer Churn Status,Reasons for Churn
CUST0001,Ngozi Berry,Jan-25,27,Kwara,4G Router,Male,2,Fair,2,165GB Monthly Plan,35000,19,665000,44.48,Yes,Relocation
CUST0002,Zainab Baker,Mar-25,16,Abuja (FCT),Mobile SIM Card,Female,2,Fair,22,12.5GB Monthly Plan,5500,12,66000,19.79,Yes,Better Offers from Competitors
CUST0003,Saidu Evans,Mar-25,21,Sokoto,5G Broadband Router,Male,1,Poor,60,150GB FUP Monthly Unlimited,20000,8,160000,9.64,No,
CUST0004,Ejiro Walker,Mar-25,36,Gombe,4G Router,Female,1,Poor,14,10GB+10mins Monthly Plan,4500,9,40500,92.72,No,
CUST0005,Nura Mann,Jan-25,57,Oyo,4G Router,Male,3,Good,53,25GB Monthly Plan,9000,16,144000,42.92,No,
CUST0006,Tamuno Lewis,Feb-25,74,Plateau,Mobile SIM Card,Female,5,Excellent,9,7GB Monthly Plan,3500,5,17500,44.25,No,
CUST0007,Boma Stewart,Mar-25,24,Jigawa,Broadband MiFi,Female,5,Excellent,39,120GB Monthly Broadband Plan,24000,11,264000,150.3,Yes,Relocation
CUST0008,Ifeanyi Park,Jan-25,53,Kwara,Broadband MiFi,Male,3,Good,30,300GB FUP Monthly Unlimited,30000,17,510000,168.41,No,
CUST0009,Bala Robbins,Jan-25,35,Gombe,Broadband MiFi,Male,5,Excellent,35,300GB FUP Monthly Unlimited,30000,10,300000,175.81,No,
CUST0010,Halima Ochoa,Mar-25,23,Imo,4G Router,Male,1,Poor,6,10GB+10mins Monthly Plan,4500,20,90000,53.38,No,
CUST0011,Ejiro Griffith,Feb-25,72,Bauchi,4G Router,Female,2,Fair,8,65GB Monthly Plan,16000,2,32000,14.66,Yes,Poor Network
CUST0012,Zainab Morton,Mar-25,78,Ondo,4G Router,Male,2,Fair,47,65GB Monthly Plan,16000,12,192000,131.97,No,
CUST0013,Ngozi Moreno,Jan-25,23,Kebbi,4G Router,Female,2,Fair,52,10GB+10mins Monthly Plan,4500,8,36000,56.07,Yes,Relocation
CUST0014,Ngozi Crawford,Feb-25,22,Adamawa,4G Router,Male,2,Fair,6,65GB Monthly Plan,16000,1,16000,33.35,No,
CUST0015,Abubakar Garner,Mar-25,70,Yobe,Broadband MiFi,Male,2,Fair,13,30GB Monthly Broadband Plan,9000,16,144000,10.5,No,
CUST0016,Kunle Ford,Feb-25,46,Kebbi,Broadband MiFi,Male,5,Excellent,57,300GB FUP Monthly Unlimited,30000,11,330000,41.25,No,
CUST0017,Tunde Hayes,Feb-25,74,Anambra,4G Router,Male,5,Excellent,35,25GB Monthly Plan,9000,15,135000,57.35,Yes,Costly Data Plans
CUST0018,David Fletcher,Mar-25,54,Bauchi,5G Broadband Router,Male,1,Poor,43,150GB FUP Monthly Unlimited,20000,18,360000,178,No,
CUST0019,Obinna Wright,Mar-25,50,Cross River,Mobile SIM Card,Male,2,Fair,46,2.5GB 2-Day Plan,900,14,12600,18.91,No,
CUST0020,Amaka Reed,Mar-25,49,Abuja (FCT),4G Router,Female,5,Excellent,36,25GB Monthly Plan,9000,5,45000,116.71,Yes,Poor Network
CUST0021,Oghene Brown,Mar-25,42,Imo,Mobile SIM Card,Male,5,Excellent,23,10GB+10mins Monthly Plan,4500,1,4500,176.34,No,
CUST0022,Shehu Ferguson,Feb-25,58,Kogi,Mobile SIM Card,Male,1,Poor,18,500MB Daily Plan,350,15,5250,40.31,No,
CUST0023,Oghene Vazquez,Feb-25,55,Osun,5G Broadband Router,Male,4,Very Good,2,200GB Monthly Broadband Plan,25000,13,325000,128.48,No,
CUST0024,David Johnson,Mar-25,58,Kano,Broadband MiFi,Male,2,Fair,57,120GB Monthly Broadband Plan,24000,11,264000,87.2,No,
CUST0025,Ifeanyi Brown,Mar-25,65,Benue,4G Router,Female,1,Poor,3,65GB Monthly Plan,16000,11,176000,189.8,No,
CUST0026,Ese Simmons,Mar-25,67,Cross River,5G Broadband Router,Male,4,Very Good,13,450GB 3-Month Broadband Plan,75000,1,75000,109.81,No,
CUST0027,Maryam Reyes,Mar-25,52,Ondo,4G Router,Female,4,Very Good,51,10GB+10mins Monthly Plan,4500,10,45000,131.94,No,
CUST0028,Obinna Sanchez,Jan-25,19,Rivers,Mobile SIM Card,Male,4,Very Good,31,10GB+10mins Monthly Plan,4500,5,22500,80.23,No,
CUST0029,Boma Franco,Feb-25,44,Enugu,5G Broadband Router,Female,1,Poor,4,450GB 3-Month Broadband Plan,75000,18,1350000,166.2,No,
CUST0030,Alabo Davis,Mar-25,49,Imo,5G Broadband Router,Female,2,Fair,50,200GB Monthly Broadband Plan,25000,18,450000,64.28,Yes,Poor Network
CUST0031,Kunle West,Mar-25,69,Kogi,Mobile SIM Card,Female,4,Very Good,35,2.5GB 2-Day Plan,900,19,17100,171.42,Yes,Better Offers from Competitors
CUST0032,Maryam Terry,Feb-25,65,Kogi,Mobile SIM Card,Male,3,Good,32,7GB Monthly Plan,3500,13,45500,133.94,No,
CUST0033,Amina Mosley,Feb-25,75,Borno,Broadband MiFi,Male,5,Excellent,59,60GB Monthly Broadband Plan,14500,15,217500,27.57,No,
CUST0034,Shehu Anderson,Feb-25,22,Edo,5G Broadband Router,Female,4,Very Good,21,120GB Monthly Broadband Plan,24000,16,384000,167.06,No,
CUST0035,Oghene Mcguire,Jan-25,44,Kaduna,4G Router,Male,2,Fair,49,165GB Monthly Plan,35000,19,665000,134.06,Yes,Poor Network
CUST0036,Ifeanyi Randall,Jan-25,36,Abia,Mobile SIM Card,Male,3,Good,38,500MB Daily Plan,350,8,2800,15.66,No,
CUST0037,Ifeanyi Ruiz,Mar-25,21,Ekiti,Broadband MiFi,Female,1,Poor,43,60GB Monthly Broadband Plan,14500,12,174000,21.56,No,
CUST0038,Shehu Randall,Feb-25,50,Adamawa,Broadband MiFi,Female,5,Excellent,30,300GB FUP Monthly Unlimited,30000,8,240000,176.39,Yes,Better Offers from Competitors
CUST0039,Zina Green,Mar-25,64,Bayelsa,5G Broadband Router,Male,2,Fair,32,120GB Monthly Broadband Plan,24000,9,216000,176.12,No,
CUST0040,Chinedu Ruiz,Feb-25,46,Kogi,Mobile SIM Card,Female,4,Very Good,36,3.2GB 2-Day Plan,1000,13,13000,59.2,No,
CUST0041,Ejiro Mason,Mar-25,76,Bauchi,5G Broadband Router,Female,3,Good,28,60GB Monthly Broadband Plan,14500,7,101500,24.57,No,
CUST0042,Shehu Hoffman,Mar-25,40,Ondo,4G Router,Female,1,Poor,18,10GB+10mins Monthly Plan,4500,18,81000,60.8,No,
CUST0043,Abubakar Johnson,Jan-25,32,Yobe,5G Broadband Router,Male,5,Excellent,56,30GB Monthly Broadband Plan,9000,16,144000,50.87,Yes,Fast Data Consumption
CUST0044,Grace Walker,Mar-25,25,Oyo,Mobile SIM Card,Male,1,Poor,10,500MB Daily Plan,350,13,4550,155.25,No,
CUST0045,Alabo Thompson,Jan-25,72,Abia,4G Router,Female,5,Excellent,20,10GB+10mins Monthly Plan,4500,3,13500,53.3,No,
CUST0046,Amina Wright,Jan-25,46,Enugu,Mobile SIM Card,Male,4,Very Good,11,500MB Daily Plan,350,10,3500,57.98,No,
CUST0047,Bala Christian,Feb-25,70,Delta,Broadband MiFi,Male,3,Good,42,150GB FUP Monthly Unlimited,20000,20,400000,158.63,No,
CUST0048,Abubakar Gentry,Mar-25,72,Delta,Mobile SIM Card,Female,4,Very Good,45,2.5GB 2-Day Plan,900,11,9900,177.94,No,
CUST0049,Zainab Taylor,Feb-25,21,Enugu,Mobile SIM Card,Female,3,Good,34,12.5GB Monthly Plan,5500,11,60500,69.92,Yes,Relocation
CUST0050,Tega Stevens,Feb-25,68,Yobe,5G Broadband Router,Female,5,Excellent,43,150GB FUP Monthly Unlimited,20000,13,260000,194.05,Yes,Poor Network
CUST0051,Zina Carter,Mar-25,68,Oyo,Mobile SIM Card,Male,5,Excellent,34,1GB+1.5mins Daily Plan,500,10,5000,110.07,No,
CUST0052,Halima Johnston,Feb-25,36,Abia,Mobile SIM Card,Male,1,Poor,36,3.2GB 2-Day Plan,1000,5,5000,129.72,Yes,Better Offers from Competitors
CUST0053,Grace Christensen,Feb-25,53,Zamfara,Mobile SIM Card,Female,4,Very Good,27,500MB Daily Plan,350,17,5950,184.41,Yes,Relocation
CUST0054,Amaka Potter,Mar-25,24,Akwa Ibom,Mobile SIM Card,Female,1,Poor,22,16.5GB+10mins Monthly Plan,6500,11,71500,97.13,Yes,Costly Data Plans
CUST0055,Halima Smith,Mar-25,65,Osun,Mobile SIM Card,Female,4,Very Good,3,1.5GB 2-Day Plan,600,2,1200,99.32,No,
CUST0056,Tega Daniels,Feb-25,28,Nasarawa,Mobile SIM Card,Male,1,Poor,34,165GB Monthly Plan,35000,9,315000,156.41,No,
CUST0057,Chinedu Davis,Feb-25,58,Adamawa,5G Broadband Router,Female,5,Excellent,21,60GB Monthly Broadband Plan,14500,14,203000,149.48,Yes,Poor Network
CUST0058,Ngozi Brown,Mar-25,28,Nasarawa,5G Broadband Router,Male,1,Poor,45,200GB Monthly Broadband Plan,25000,5,125000,75.28,Yes,Better Offers from Competitors
CUST0059,Halima Williams,Jan-25,68,Enugu,4G Router,Male,5,Excellent,12,10GB+10mins Monthly Plan,4500,9,40500,92.5,No,
CUST0060,Amina Payne,Mar-25,25,Nasarawa,5G Broadband Router,Female,4,Very Good,38,450GB 3-Month Broadband Plan,75000,4,300000,170.74,No,
CUST0061,Abubakar Ewing,Jan-25,53,Kano,Broadband MiFi,Female,5,Excellent,18,300GB FUP Monthly Unlimited,30000,8,240000,155.26,No,
CUST0062,Ngozi Henson,Mar-25,21,Abia,Mobile SIM Card,Female,2,Fair,3,500MB Daily Plan,350,18,6300,26.87,Yes,Costly Data Plans
CUST0063,Amina Flores,Mar-25,48,Taraba,4G Router,Female,1,Poor,48,10GB+10mins Monthly Plan,4500,13,58500,172.1,No,
CUST0064,Ejiro Ford,Jan-25,27,Kebbi,5G Broadband Router,Male,4,Very Good,17,200GB Monthly Broadband Plan,25000,8,200000,22.12,No,
CUST0065,Kunle Shaw,Feb-25,75,Abia,Mobile SIM Card,Female,1,Poor,8,3.2GB 2-Day Plan,1000,18,18000,47.34,No,
CUST0066,David Schneider,Jan-25,69,Plateau,Broadband MiFi,Female,4,Very Good,42,300GB FUP Monthly Unlimited,30000,15,450000,43.85,No,
CUST0067,Ejiro Smith,Feb-25,61,Oyo,Broadband MiFi,Female,1,Poor,18,150GB FUP Monthly Unlimited,20000,20,400000,128.52,No,
CUST0068,Halima Anderson,Feb-25,32,Ondo,5G Broadband Router,Male,5,Excellent,54,300GB FUP Monthly Unlimited,30000,20,600000,157.83,Yes,Better Offers from Competitors
CUST0069,Tunde Oliver,Mar-25,51,Plateau,4G Router,Male,2,Fair,35,65GB Monthly Plan,16000,8,128000,71.97,Yes,Better Offers from Competitors
CUST0070,Ese Obrien,Feb-25,18,Enugu,4G Router,Female,4,Very Good,4,10GB+10mins Monthly Plan,4500,4,18000,102.89,No,
CUST0071,Alabo Keith,Mar-25,80,Osun,Broadband MiFi,Male,4,Very Good,47,60GB Monthly Broadband Plan,14500,14,203000,169.54,No,
CUST0072,Ngozi Hernandez,Jan-25,78,Nasarawa,4G Router,Male,3,Good,58,25GB Monthly Plan,9000,19,171000,125.05,No,
CUST0073,Ese Flowers,Feb-25,64,Bauchi,Mobile SIM Card,Female,1,Poor,30,165GB Monthly Plan,35000,8,280000,90.59,No,
CUST0074,Ibim Marshall,Jan-25,59,Sokoto,5G Broadband Router,Female,3,Good,27,1.5TB Yearly Broadband Plan,150000,3,450000,13.89,No,
CUST0075,Tega Medina,Feb-25,31,Kogi,5G Broadband Router,Female,1,Poor,56,60GB Monthly Broadband Plan,14500,16,232000,31.37,No,
CUST0076,Nura Mcneil,Feb-25,70,Kano,5G Broadband Router,Female,3,Good,2,30GB Monthly Broadband Plan,9000,5,45000,36.69,No,
CUST0077,Chinedu Pitts,Mar-25,43,Jigawa,5G Broadband Router,Female,2,Fair,30,30GB Monthly Broadband Plan,9000,20,180000,31.54,No,
CUST0078,Alabo Kelly,Jan-25,69,Akwa Ibom,Mobile SIM Card,Male,3,Good,49,1GB+1.5mins Daily Plan,500,13,6500,9.56,No,
CUST0079,Fatima Pennington,Jan-25,33,Edo,Mobile SIM Card,Female,1,Poor,21,165GB Monthly Plan,35000,8,280000,106.75,No,
CUST0080,Kunle Williams,Feb-25,66,Rivers,Mobile SIM Card,Female,1,Poor,2,20GB Monthly Plan,7500,13,97500,58.26,No,
CUST0081,Chinedu Ortiz,Feb-25,71,Anambra,5G Broadband Router,Male,5,Excellent,28,200GB Monthly Broadband Plan,25000,3,75000,155.93,Yes,Better Offers from Competitors
CUST0082,Michael Ortiz,Feb-25,40,Ekiti,4G Router,Female,2,Fair,47,10GB+10mins Monthly Plan,4500,3,13500,152.16,Yes,Costly Data Plans
CUST0083,Shehu Holt,Mar-25,79,Sokoto,Mobile SIM Card,Female,3,Good,44,1GB+1.5mins Daily Plan,500,19,9500,159.37,Yes,Poor Network
CUST0084,Maryam Velez,Mar-25,75,Nasarawa,Mobile SIM Card,Male,3,Good,4,12.5GB Monthly Plan,5500,2,11000,116.28,Yes,Better Offers from Competitors
CUST0085,Alabo Turner,Feb-25,40,Niger,Broadband MiFi,Female,1,Poor,33,150GB FUP Monthly Unlimited,20000,15,300000,8.31,No,
CUST0086,Amina Rivas,Feb-25,62,Gombe,5G Broadband Router,Female,3,Good,25,150GB FUP Monthly Unlimited,20000,18,360000,66.27,No,
CUST0087,Omamuzo Guerrero,Jan-25,52,Edo,5G Broadband Router,Male,5,Excellent,22,450GB 3-Month Broadband Plan,75000,3,225000,26.23,No,
CUST0088,Amaka Brown,Mar-25,27,Kwara,Mobile SIM Card,Female,3,Good,2,500MB Daily Plan,350,5,1750,200,Yes,Poor Customer Service
CUST0089,Michael Schultz,Feb-25,20,Bayelsa,4G Router,Male,2,Fair,39,65GB Monthly Plan,16000,8,128000,82.47,Yes,Better Offers from Competitors
CUST0090,John Montoya,Mar-25,40,Gombe,Mobile SIM Card,Female,4,Very Good,30,10GB+10mins Monthly Plan,4500,2,9000,174.66,No,
CUST0091,Ngozi Fox,Feb-25,31,Cross River,4G Router,Male,3,Good,49,10GB+10mins Monthly Plan,4500,12,54000,163.43,No,
CUST0092,Chinedu Burke,Jan-25,63,Osun,Broadband MiFi,Male,3,Good,21,300GB FUP Monthly Unlimited,30000,16,480000,183.52,No,
CUST0093,Amaka Webb,Jan-25,76,Nasarawa,Mobile SIM Card,Male,1,Poor,58,3.2GB 2-Day Plan,1000,8,8000,155.35,Yes,Better Offers from Competitors
CUST0094,Maryam Tucker,Feb-25,31,Oyo,Broadband MiFi,Male,1,Poor,27,150GB FUP Monthly Unlimited,20000,1,20000,58.61,Yes,Fast Data Consumption
CUST0095,Sarah James,Feb-25,62,Kaduna,5G Broadband Router,Male,1,Poor,25,30GB Monthly Broadband Plan,9000,3,27000,71.74,No,
CUST0096,Tega Turner,Mar-25,33,Rivers,Mobile SIM Card,Female,2,Fair,35,1.5GB 2-Day Plan,600,3,1800,162.39,No,
CUST0097,Ese Perez,Feb-25,55,Zamfara,5G Broadband Router,Female,3,Good,53,200GB Monthly Broadband Plan,25000,2,50000,172.5,Yes,High Call Tarriffs
CUST0098,Tega Murray,Feb-25,50,Delta,5G Broadband Router,Female,4,Very Good,28,1.5TB Yearly Broadband Plan,150000,12,1800000,138.57,No,
CUST0099,Boma Gonzalez,Mar-25,26,Kwara,5G Broadband Router,Male,3,Good,35,450GB 3-Month Broadband Plan,75000,15,1125000,33.75,Yes,Costly Data Plans
CUST0100,Kunle Davis,Feb-25,67,Gombe,Broadband MiFi,Male,5,Excellent,2,30GB Monthly Broadband Plan,9000,12,108000,47.58,No,
CUST0101,Bola Brown,Feb-25,35,Nasarawa,5G Broadband Router,Female,1,Poor,24,120GB Monthly Broadband Plan,24000,4,96000,50.3,No,
CUST0102,Ifeanyi Burns,Mar-25,49,Edo,Mobile SIM Card,Female,4,Very Good,14,1.5GB 2-Day Plan,600,15,9000,179.79,Yes,Poor Customer Service
CUST0103,Chinedu Barrera,Mar-25,56,Ekiti,4G Router,Male,3,Good,36,65GB Monthly Plan,16000,5,80000,197.03,No,
CUST0104,Zina Fischer,Feb-25,32,Katsina,Broadband MiFi,Male,4,Very Good,20,300GB FUP Monthly Unlimited,30000,15,450000,128.65,No,
CUST0105,Amaka Garcia,Jan-25,39,Borno,Mobile SIM Card,Female,1,Poor,33,25GB Monthly Plan,9000,8,72000,186.98,No,
CUST0106,Abubakar Holmes,Mar-25,26,Edo,Broadband MiFi,Male,2,Fair,41,120GB Monthly Broadband Plan,24000,5,120000,188.35,No,
CUST0107,Bola Rogers,Mar-25,19,Katsina,4G Router,Male,2,Fair,42,10GB+10mins Monthly Plan,4500,10,45000,128.56,No,
CUST0108,John Rose,Jan-25,47,Kebbi,Mobile SIM Card,Female,1,Poor,30,7GB Monthly Plan,3500,11,38500,121.53,Yes,Fast Data Consumption
CUST0109,Tamuno Bates,Feb-25,32,Gombe,Mobile SIM Card,Male,4,Very Good,21,65GB Monthly Plan,16000,13,208000,10.6,Yes,Fast Data Consumption
CUST0110,Ibim Richards,Mar-25,47,Abuja (FCT),Mobile SIM Card,Female,2,Fair,60,1GB+1.5mins Daily Plan,500,3,1500,99.73,No,
CUST0111,Fatima Blevins,Feb-25,61,Oyo,Mobile SIM Card,Male,5,Excellent,19,3.2GB 2-Day Plan,1000,9,9000,86.47,No,
CUST0112,Bala Smith,Feb-25,62,Cross River,Broadband MiFi,Male,5,Excellent,25,60GB Monthly Broadband Plan,14500,11,159500,74.95,Yes,Relocation
CUST0113,Michael Evans,Mar-25,21,Rivers,4G Router,Male,4,Very Good,9,25GB Monthly Plan,9000,11,99000,186.31,No,
CUST0114,Amina Todd,Feb-25,66,Abia,5G Broadband Router,Female,5,Excellent,33,200GB Monthly Broadband Plan,25000,14,350000,134.92,Yes,Better Offers from Competitors
CUST0115,Maryam Smith,Feb-25,19,Taraba,Mobile SIM Card,Female,1,Poor,42,1.5GB 2-Day Plan,600,8,4800,164.42,No,
CUST0116,Bola Garcia,Mar-25,30,Benue,Mobile SIM Card,Male,4,Very Good,29,16.5GB+10mins Monthly Plan,6500,16,104000,155.11,Yes,High Call Tarriffs
CUST0117,Sade Collins,Mar-25,33,Bauchi,4G Router,Male,4,Very Good,36,25GB Monthly Plan,9000,9,81000,109.48,No,
CUST0118,Zainab Garcia,Mar-25,54,Osun,5G Broadband Router,Female,2,Fair,50,200GB Monthly Broadband Plan,25000,9,225000,112.32,No,
CUST0119,Omamuzo Terry,Jan-25,66,Ekiti,5G Broadband Router,Male,3,Good,19,1.5TB Yearly Broadband Plan,150000,16,2400000,131.37,No,
CUST0120,Fatima Lindsey,Mar-25,41,Adamawa,4G Router,Female,2,Fair,60,10GB+10mins Monthly Plan,4500,2,9000,127.77,Yes,High Call Tarriffs
CUST0121,Tunde Smith,Feb-25,36,Kogi,Broadband MiFi,Female,3,Good,31,120GB Monthly Broadband Plan,24000,2,48000,147.87,No,
CUST0122,Grace Fowler,Mar-25,39,Cross River,5G Broadband Router,Male,5,Excellent,1,1.5TB Yearly Broadband Plan,150000,5,750000,177.91,No,
CUST0123,Tega Chen,Feb-25,36,Sokoto,4G Router,Female,1,Poor,46,165GB Monthly Plan,35000,17,595000,165.48,No,
CUST0124,Shehu Nguyen,Feb-25,33,Taraba,5G Broadband Router,Female,1,Poor,60,120GB Monthly Broadband Plan,24000,19,456000,116.7,Yes,Poor Customer Service
CUST0125,Halima Aguilar,Feb-25,23,Delta,5G Broadband Router,Female,4,Very Good,20,120GB Monthly Broadband Plan,24000,8,192000,73.83,No,
CUST0126,Ejiro Ware,Feb-25,69,Taraba,Mobile SIM Card,Male,5,Excellent,49,16.5GB+10mins Monthly Plan,6500,3,19500,140.9,No,
CUST0127,Ifeanyi Clayton,Feb-25,23,Zamfara,Mobile SIM Card,Male,2,Fair,37,12.5GB Monthly Plan,5500,17,93500,18.64,No,
CUST0128,Sade Berry,Mar-25,75,Abia,Broadband MiFi,Male,1,Poor,26,300GB FUP Monthly Unlimited,30000,18,540000,140.23,No,
CUST0129,Shehu Lee,Feb-25,33,Kogi,Mobile SIM Card,Female,4,Very Good,58,16.5GB+10mins Monthly Plan,6500,12,78000,27.03,No,
CUST0130,Tamuno Greer,Jan-25,32,Osun,Mobile SIM Card,Male,3,Good,49,500MB Daily Plan,350,12,4200,49.88,No,
CUST0131,Funke Hart,Jan-25,46,Ondo,Broadband MiFi,Male,4,Very Good,7,60GB Monthly Broadband Plan,14500,18,261000,88.07,No,
CUST0132,Nura Yang,Feb-25,56,Niger,Broadband MiFi,Male,5,Excellent,20,120GB Monthly Broadband Plan,24000,6,144000,176,Yes,Costly Data Plans
CUST0133,Oghene Cooper,Feb-25,64,Bauchi,Mobile SIM Card,Female,4,Very Good,45,500MB Daily Plan,350,10,3500,169.94,Yes,Fast Data Consumption
CUST0134,Obinna Branch,Feb-25,75,Oyo,Broadband MiFi,Female,4,Very Good,27,300GB FUP Monthly Unlimited,30000,7,210000,18.95,Yes,Poor Customer Service
CUST0135,Bola Anderson,Feb-25,25,Benue,Mobile SIM Card,Male,3,Good,31,10GB+10mins Monthly Plan,4500,4,18000,192.43,No,
CUST0136,John Hill,Feb-25,47,Ondo,Mobile SIM Card,Female,5,Excellent,59,16.5GB+10mins Monthly Plan,6500,10,65000,129.92,No,
CUST0137,Zina Singh,Feb-25,28,Taraba,4G Router,Female,3,Good,59,10GB+10mins Monthly Plan,4500,18,81000,3.74,No,
CUST0138,Ibim Brown,Feb-25,53,Plateau,Mobile SIM Card,Male,4,Very Good,22,16.5GB+10mins Monthly Plan,6500,11,71500,131.09,No,
CUST0139,Saidu Holt,Mar-25,78,Yobe,4G Router,Female,2,Fair,11,65GB Monthly Plan,16000,3,48000,105.03,Yes,Relocation
CUST0140,Amaka Vang,Feb-25,45,Kaduna,Mobile SIM Card,Male,5,Excellent,1,12.5GB Monthly Plan,5500,18,99000,3.64,No,
CUST0141,Ibim Faulkner,Mar-25,17,Kano,Mobile SIM Card,Female,1,Poor,35,3.2GB 2-Day Plan,1000,8,8000,105.11,No,
CUST0142,Bala Hood,Feb-25,48,Ekiti,Mobile SIM Card,Female,1,Poor,51,500MB Daily Plan,350,8,2800,198.05,No,
CUST0143,Bola Brooks,Feb-25,27,Kebbi,Mobile SIM Card,Female,1,Poor,25,165GB Monthly Plan,35000,11,385000,129.16,No,
CUST0144,Fatima Wheeler,Jan-25,76,Akwa Ibom,Broadband MiFi,Male,3,Good,60,30GB Monthly Broadband Plan,9000,19,171000,192.31,No,
CUST0145,Halima Valencia,Feb-25,65,Adamawa,Broadband MiFi,Female,1,Poor,25,60GB Monthly Broadband Plan,14500,3,43500,46.81,No,
CUST0146,Tamuno Boyd,Feb-25,57,Kano,Mobile SIM Card,Female,4,Very Good,51,20GB Monthly Plan,7500,20,150000,17.6,Yes,Relocation
CUST0147,Chinedu Martinez,Feb-25,50,Plateau,Broadband MiFi,Female,4,Very Good,46,30GB Monthly Broadband Plan,9000,15,135000,188.62,No,
CUST0148,Ejiro Finley,Feb-25,50,Anambra,Mobile SIM Card,Male,4,Very Good,6,3.2GB 2-Day Plan,1000,3,3000,71.11,No,
CUST0149,Omamuzo Levine,Feb-25,26,Imo,Mobile SIM Card,Male,2,Fair,44,3.2GB 2-Day Plan,1000,9,9000,33.86,Yes,Costly Data Plans
CUST0150,Ejiro Roman,Feb-25,48,Imo,Mobile SIM Card,Female,4,Very Good,39,7GB Monthly Plan,3500,13,45500,168.4,Yes,Costly Data Plans
CUST0151,Tega Mendez,Feb-25,72,Bayelsa,4G Router,Female,3,Good,53,10GB+10mins Monthly Plan,4500,11,49500,192.93,No,
CUST0152,Tamuno Yang,Feb-25,62,Delta,4G Router,Male,5,Excellent,38,25GB Monthly Plan,9000,3,27000,166.34,Yes,High Call Tarriffs
CUST0153,Maryam Williams,Feb-25,46,Edo,Mobile SIM Card,Male,4,Very Good,46,16.5GB+10mins Monthly Plan,6500,14,91000,184.74,Yes,Relocation
CUST0154,David Miller,Mar-25,26,Anambra,Mobile SIM Card,Male,2,Fair,43,7GB Monthly Plan,3500,14,49000,193.16,No,
CUST0155,Ngozi Fowler,Feb-25,17,Anambra,4G Router,Female,4,Very Good,15,10GB+10mins Monthly Plan,4500,10,45000,96.81,No,
CUST0156,Ifeanyi Garcia,Feb-25,34,Ekiti,Mobile SIM Card,Female,2,Fair,22,12.5GB Monthly Plan,5500,15,82500,144.54,No,
CUST0157,Ifeanyi Jimenez,Feb-25,18,Bayelsa,4G Router,Male,2,Fair,44,10GB+10mins Monthly Plan,4500,13,58500,46.76,No,
CUST0159,Kunle Nielsen,Mar-25,29,Adamawa,Mobile SIM Card,Male,2,Fair,24,7GB Monthly Plan,3500,20,70000,119.6,No,
CUST0160,Oghene Diaz,Jan-25,74,Enugu,5G Broadband Router,Female,2,Fair,59,150GB FUP Monthly Unlimited,20000,5,100000,37.02,No,
CUST0161,Michael Wilson,Feb-25,65,Kogi,4G Router,Male,4,Very Good,37,165GB Monthly Plan,35000,6,210000,58.12,Yes,High Call Tarriffs
CUST0162,Grace Gallegos,Feb-25,33,Benue,Mobile SIM Card,Female,4,Very Good,36,1.5GB 2-Day Plan,600,1,600,16.99,No,
CUST0163,Nura Jackson,Feb-25,52,Abuja (FCT),Broadband MiFi,Female,5,Excellent,37,120GB Monthly Broadband Plan,24000,2,48000,164.61,No,
CUST0164,Maryam Diaz,Jan-25,20,Nasarawa,Mobile SIM Card,Female,4,Very Good,23,10GB+10mins Monthly Plan,4500,19,85500,162.24,No,
CUST0165,Oghene Allison,Feb-25,70,Abuja (FCT),5G Broadband Router,Male,2,Fair,51,300GB FUP Monthly Unlimited,30000,10,300000,65.07,No,
CUST0166,Sade Suarez,Feb-25,51,Borno,Mobile SIM Card,Male,3,Good,16,1GB+1.5mins Daily Plan,500,13,6500,125.75,No,
CUST0167,Ejiro Thomas,Jan-25,74,Yobe,5G Broadband Router,Female,1,Poor,38,450GB 3-Month Broadband Plan,75000,14,1050000,43.96,No,
CUST0168,Abubakar Weiss,Mar-25,59,Borno,Broadband MiFi,Female,1,Poor,51,150GB FUP Monthly Unlimited,20000,1,20000,88.54,Yes,High Call Tarriffs
CUST0169,Maryam Dean,Mar-25,36,Akwa Ibom,4G Router,Male,3,Good,42,25GB Monthly Plan,9000,8,72000,145.33,Yes,High Call Tarriffs
CUST0170,Amaka Whitaker,Jan-25,44,Bauchi,4G Router,Female,3,Good,1,65GB Monthly Plan,16000,3,48000,46.17,No,
CUST0171,Maryam Dixon,Feb-25,33,Jigawa,4G Router,Male,1,Poor,42,165GB Monthly Plan,35000,7,245000,70.56,No,
CUST0172,Obinna Miller,Jan-25,68,Nasarawa,Mobile SIM Card,Male,2,Fair,6,7GB Monthly Plan,3500,8,28000,158.32,No,
CUST0173,Maryam Soto,Feb-25,42,Bauchi,Mobile SIM Card,Male,3,Good,48,20GB Monthly Plan,7500,16,120000,22.99,No,
CUST0174,Kunle Jones,Feb-25,17,Gombe,4G Router,Female,5,Excellent,9,10GB+10mins Monthly Plan,4500,1,4500,117.68,No,
CUST0175,Tamuno Patton,Feb-25,80,Cross River,Mobile SIM Card,Female,1,Poor,28,25GB Monthly Plan,9000,7,63000,16.26,No,
CUST0176,Maryam Martinez,Jan-25,71,Imo,Broadband MiFi,Male,4,Very Good,16,30GB Monthly Broadband Plan,9000,5,45000,3.03,Yes,Relocation
CUST0177,Amina Johnson,Jan-25,63,Borno,5G Broadband Router,Female,1,Poor,47,150GB FUP Monthly Unlimited,20000,19,380000,52.96,No,
CUST0178,Ejiro Johnson,Feb-25,23,Yobe,Broadband MiFi,Male,3,Good,24,30GB Monthly Broadband Plan,9000,1,9000,171.81,No,
CUST0179,Bola Curtis,Feb-25,69,Osun,5G Broadband Router,Female,3,Good,16,300GB FUP Monthly Unlimited,30000,17,510000,45.03,Yes,Poor Network
CUST0180,Ese Haley,Feb-25,27,Sokoto,Mobile SIM Card,Male,3,Good,24,25GB Monthly Plan,9000,16,144000,118.54,No,
CUST0181,Halima Walker,Feb-25,35,Lagos,Broadband MiFi,Female,5,Excellent,2,60GB Monthly Broadband Plan,14500,10,145000,169.88,No,
CUST0182,Obinna Mills,Feb-25,51,Katsina,Mobile SIM Card,Male,5,Excellent,59,3.2GB 2-Day Plan,1000,17,17000,116.36,No,
CUST0183,Kunle Shaw,Mar-25,23,Kwara,5G Broadband Router,Male,3,Good,16,1.5TB Yearly Broadband Plan,150000,3,450000,54.76,No,
CUST0184,Ngozi Webb,Feb-25,35,Anambra,5G Broadband Router,Male,3,Good,29,120GB Monthly Broadband Plan,24000,4,96000,92.94,No,
CUST0185,Obinna Young,Jan-25,27,Imo,Mobile SIM Card,Female,3,Good,26,12.5GB Monthly Plan,5500,18,99000,111.41,Yes,Poor Customer Service
CUST0186,Halima Harrison,Feb-25,28,Sokoto,4G Router,Male,1,Poor,52,10GB+10mins Monthly Plan,4500,12,54000,164.82,Yes,Better Offers from Competitors
CUST0187,Chinedu Brown,Feb-25,49,Kaduna,5G Broadband Router,Male,4,Very Good,5,150GB FUP Monthly Unlimited,20000,15,300000,9.02,No,
CUST0188,Sade Cruz,Jan-25,37,Kwara,5G Broadband Router,Female,4,Very Good,32,60GB Monthly Broadband Plan,14500,9,130500,181.71,No,
CUST0189,Zainab Mcguire,Feb-25,73,Plateau,Mobile SIM Card,Male,3,Good,40,1GB+1.5mins Daily Plan,500,14,7000,76.91,No,
CUST0190,Funke Thomas,Feb-25,64,Ekiti,5G Broadband Router,Female,3,Good,35,300GB FUP Monthly Unlimited,30000,20,600000,5.7,No,
CUST0191,Sarah Meyer,Feb-25,61,Osun,Broadband MiFi,Male,2,Fair,7,300GB FUP Monthly Unlimited,30000,6,180000,187.07,Yes,Better Offers from Competitors
CUST0192,Oghene Schroeder,Mar-25,34,Benue,Broadband MiFi,Female,2,Fair,35,150GB FUP Monthly Unlimited,20000,1,20000,120.53,No,
CUST0193,Sarah Thomas,Feb-25,77,Lagos,5G Broadband Router,Female,2,Fair,59,30GB Monthly Broadband Plan,9000,19,171000,4.87,No,
CUST0194,Obinna Dunn,Mar-25,30,Bauchi,5G Broadband Router,Female,4,Very Good,5,300GB FUP Monthly Unlimited,30000,14,420000,195.18,No,
CUST0195,Oghene Munoz,Mar-25,44,Enugu,Mobile SIM Card,Female,2,Fair,20,1.5GB 2-Day Plan,600,20,12000,120.68,Yes,Poor Network
CUST0196,Halima Burns,Jan-25,60,Niger,4G Router,Male,3,Good,41,65GB Monthly Plan,16000,4,64000,70.42,No,
CUST0197,Ibim Murphy,Feb-25,37,Kogi,Mobile SIM Card,Female,3,Good,57,500MB Daily Plan,350,3,1050,32.95,No,
CUST0198,Bola Potter,Jan-25,53,Kano,4G Router,Female,1,Poor,17,65GB Monthly Plan,16000,3,48000,109.64,No,
CUST0199,John Morales,Feb-25,19,Kwara,4G Router,Male,2,Fair,39,10GB+10mins Monthly Plan,4500,18,81000,139.59,Yes,Costly Data Plans
CUST0200,Saidu Tucker,Jan-25,52,Abia,4G Router,Male,4,Very Good,7,25GB Monthly Plan,9000,3,27000,1.26,No,
CUST0201,John Mcgrath,Feb-25,41,Anambra,Broadband MiFi,Male,3,Good,14,60GB Monthly Broadband Plan,14500,9,130500,94.45,No,
CUST0202,Shehu Hays,Feb-25,63,Jigawa,4G Router,Female,1,Poor,12,65GB Monthly Plan,16000,4,64000,30.65,Yes,Fast Data Consumption
CUST0203,Ibim Castro,Feb-25,45,Oyo,4G Router,Female,5,Excellent,53,25GB Monthly Plan,9000,2,18000,16.25,No,
CUST0204,Obinna Patterson,Feb-25,31,Nasarawa,Mobile SIM Card,Male,2,Fair,11,500MB Daily Plan,350,5,1750,199.46,Yes,Fast Data Consumption
CUST0205,Saidu Munoz,Feb-25,56,Kaduna,Mobile SIM Card,Male,5,Excellent,25,16.5GB+10mins Monthly Plan,6500,4,26000,156.45,No,
CUST0206,Ngozi Wood,Mar-25,29,Anambra,Mobile SIM Card,Female,4,Very Good,56,1.5GB 2-Day Plan,600,5,3000,55.45,Yes,High Call Tarriffs
CUST0207,Bola Miller,Feb-25,66,Bayelsa,5G Broadband Router,Male,3,Good,4,120GB Monthly Broadband Plan,24000,16,384000,62.53,No,
CUST0208,Ngozi Acevedo,Feb-25,45,Borno,Broadband MiFi,Female,3,Good,48,150GB FUP Monthly Unlimited,20000,14,280000,182.73,Yes,Fast Data Consumption
CUST0209,Kunle Bird,Jan-25,55,Zamfara,Broadband MiFi,Female,2,Fair,9,150GB FUP Monthly Unlimited,20000,2,40000,7.1,Yes,Better Offers from Competitors
CUST0210,Ejiro Gill,Feb-25,41,Akwa Ibom,Broadband MiFi,Female,5,Excellent,53,150GB FUP Monthly Unlimited,20000,20,400000,74.81,No,
CUST0211,Alabo Clay,Feb-25,38,Taraba,Broadband MiFi,Female,3,Good,23,60GB Monthly Broadband Plan,14500,19,275500,10.41,No,
CUST0212,Michael Williams,Feb-25,18,Lagos,4G Router,Female,2,Fair,59,10GB+10mins Monthly Plan,4500,10,45000,121.86,No,
CUST0213,Zainab Clark,Mar-25,70,Jigawa,Mobile SIM Card,Female,2,Fair,30,2.5GB 2-Day Plan,900,12,10800,102.55,No,
CUST0214,Ese Cooper,Feb-25,51,Edo,Mobile SIM Card,Female,5,Excellent,13,7GB Monthly Plan,3500,1,3500,136.31,No,
CUST0215,Grace Figueroa,Feb-25,53,Edo,Mobile SIM Card,Female,1,Poor,26,165GB Monthly Plan,35000,12,420000,181.35,No,
CUST0216,John Erickson,Mar-25,32,Edo,5G Broadband Router,Male,1,Poor,44,200GB Monthly Broadband Plan,25000,10,250000,52.48,Yes,Poor Customer Service
CUST0217,Kunle Collins,Feb-25,76,Benue,4G Router,Male,5,Excellent,56,10GB+10mins Monthly Plan,4500,19,85500,68.86,Yes,Poor Network
CUST0218,Zina Dawson,Jan-25,34,Niger,5G Broadband Router,Male,4,Very Good,50,30GB Monthly Broadband Plan,9000,9,81000,1.44,No,
CUST0219,Fatima Scott,Jan-25,37,Abuja (FCT),Mobile SIM Card,Female,2,Fair,51,12.5GB Monthly Plan,5500,2,11000,76.97,No,
CUST0220,Bala Smith,Mar-25,18,Lagos,Mobile SIM Card,Male,3,Good,15,2.5GB 2-Day Plan,900,10,9000,59.99,Yes,Fast Data Consumption
CUST0221,Zina Cochran,Feb-25,59,Kwara,Mobile SIM Card,Male,3,Good,22,2.5GB 2-Day Plan,900,5,4500,46.07,No,
CUST0222,Fatima Carpenter,Mar-25,18,Zamfara,Mobile SIM Card,Male,1,Poor,8,2.5GB 2-Day Plan,900,1,900,132.56,No,
CUST0223,Sade Howell,Jan-25,30,Kogi,Mobile SIM Card,Female,5,Excellent,25,65GB Monthly Plan,16000,4,64000,60.57,Yes,High Call Tarriffs
CUST0224,Sarah Stevens,Jan-25,50,Borno,5G Broadband Router,Female,5,Excellent,54,150GB FUP Monthly Unlimited,20000,16,320000,157.06,No,
CUST0225,Bala Cummings,Feb-25,41,Edo,Mobile SIM Card,Male,3,Good,23,165GB Monthly Plan,35000,1,35000,66.46,Yes,Relocation
CUST0226,Grace Carter,Jan-25,35,Katsina,5G Broadband Router,Male,3,Good,47,1.5TB Yearly Broadband Plan,150000,6,900000,10.49,No,
CUST0227,Ese Stewart,Jan-25,70,Delta,4G Router,Male,1,Poor,55,165GB Monthly Plan,35000,9,315000,191.04,No,
CUST0228,Zina Fuller,Feb-25,50,Jigawa,Broadband MiFi,Female,2,Fair,52,60GB Monthly Broadband Plan,14500,16,232000,182.29,Yes,High Call Tarriffs
CUST0229,John Edwards,Jan-25,78,Delta,Mobile SIM Card,Female,1,Poor,29,25GB Monthly Plan,9000,20,180000,104.06,Yes,Costly Data Plans
CUST0230,Ngozi Pierce,Feb-25,71,Imo,Broadband MiFi,Female,2,Fair,23,120GB Monthly Broadband Plan,24000,16,384000,169.84,No,
CUST0231,Sade Smith,Feb-25,80,Osun,Mobile SIM Card,Female,1,Poor,26,12.5GB Monthly Plan,5500,16,88000,63.55,No,
CUST0232,Chinedu Hughes,Feb-25,54,Zamfara,4G Router,Male,3,Good,42,165GB Monthly Plan,35000,20,700000,66.73,No,
CUST0233,John Benjamin,Feb-25,62,Nasarawa,5G Broadband Router,Male,1,Poor,7,150GB FUP Monthly Unlimited,20000,6,120000,9.63,No,
CUST0234,Bala Hardin,Feb-25,31,Kebbi,Broadband MiFi,Male,3,Good,30,60GB Monthly Broadband Plan,14500,19,275500,91.75,Yes,Fast Data Consumption
CUST0235,Michael Savage,Jan-25,33,Yobe,Mobile SIM Card,Male,5,Excellent,34,1.5GB 2-Day Plan,600,5,3000,146.23,No,
CUST0236,Omamuzo Stephenson,Mar-25,69,Imo,Mobile SIM Card,Female,3,Good,26,165GB Monthly Plan,35000,17,595000,120.7,No,
CUST0237,Maryam Moore,Mar-25,56,Ondo,4G Router,Male,3,Good,14,25GB Monthly Plan,9000,12,108000,142.22,No,
CUST0238,John Patel,Feb-25,69,Adamawa,Mobile SIM Card,Female,1,Poor,57,1.5GB 2-Day Plan,600,2,1200,11.09,No,
CUST0239,Bala Holt,Mar-25,50,Abuja (FCT),5G Broadband Router,Female,2,Fair,44,200GB Monthly Broadband Plan,25000,4,100000,162.9,No,
CUST0240,Omamuzo Roberts,Jan-25,46,Zamfara,5G Broadband Router,Female,4,Very Good,45,30GB Monthly Broadband Plan,9000,7,63000,148.86,No,
CUST0241,Bala Calhoun,Jan-25,40,Cross River,Broadband MiFi,Female,2,Fair,12,60GB Monthly Broadband Plan,14500,9,130500,56.18,No,
CUST0242,Bola Miller,Mar-25,35,Niger,5G Broadband Router,Male,4,Very Good,50,60GB Monthly Broadband Plan,14500,17,246500,191.42,No,
CUST0243,Chinedu Elliott,Mar-25,60,Osun,Mobile SIM Card,Male,3,Good,43,16.5GB+10mins Monthly Plan,6500,1,6500,164.83,No,
CUST0244,Ifeanyi Austin,Feb-25,60,Nasarawa,Mobile SIM Card,Male,1,Poor,58,20GB Monthly Plan,7500,10,75000,51.69,No,
CUST0245,Michael Jones,Feb-25,73,Yobe,4G Router,Male,3,Good,19,65GB Monthly Plan,16000,7,112000,125.57,No,
CUST0246,Fatima Foster,Feb-25,70,Anambra,Broadband MiFi,Male,1,Poor,35,60GB Monthly Broadband Plan,14500,2,29000,143.52,No,
CUST0247,Chinedu Yates,Mar-25,25,Oyo,5G Broadband Router,Male,5,Excellent,51,450GB 3-Month Broadband Plan,75000,13,975000,77.91,Yes,Better Offers from Competitors
CUST0248,Boma Peterson,Jan-25,56,Kano,Broadband MiFi,Female,5,Excellent,44,30GB Monthly Broadband Plan,9000,17,153000,71.86,Yes,High Call Tarriffs
CUST0249,Omamuzo Jones,Feb-25,66,Kano,5G Broadband Router,Female,2,Fair,11,120GB Monthly Broadband Plan,24000,12,288000,135.62,No,
CUST0250,Tamuno Lawrence,Mar-25,26,Abia,4G Router,Male,2,Fair,48,10GB+10mins Monthly Plan,4500,9,40500,123.57,No,
CUST0251,Zina Nicholson,Jan-25,25,Cross River,5G Broadband Router,Male,2,Fair,17,300GB FUP Monthly Unlimited,30000,8,240000,134.42,No,
CUST0252,Bala Graham,Mar-25,56,Yobe,5G Broadband Router,Female,5,Excellent,22,300GB FUP Monthly Unlimited,30000,8,240000,1.46,Yes,Relocation
CUST0253,Zainab Blackwell,Feb-25,62,Borno,Mobile SIM Card,Female,4,Very Good,57,3.2GB 2-Day Plan,1000,20,20000,35.57,No,
CUST0254,David Rodriguez,Jan-25,41,Edo,Broadband MiFi,Male,1,Poor,47,120GB Monthly Broadband Plan,24000,2,48000,42.95,No,
CUST0255,Ejiro Miller,Feb-25,66,Osun,5G Broadband Router,Female,5,Excellent,9,30GB Monthly Broadband Plan,9000,20,180000,132.7,No,
CUST0256,Alabo Smith,Feb-25,36,Enugu,4G Router,Male,3,Good,48,25GB Monthly Plan,9000,2,18000,74.2,Yes,Better Offers from Competitors
CUST0257,Omamuzo Smith,Mar-25,76,Sokoto,5G Broadband Router,Male,1,Poor,3,300GB FUP Monthly Unlimited,30000,13,390000,75.64,No,
CUST0258,Sarah Munoz,Feb-25,67,Ekiti,Mobile SIM Card,Female,5,Excellent,32,65GB Monthly Plan,16000,9,144000,103.15,Yes,Poor Customer Service
CUST0259,Ejiro Collins,Mar-25,31,Osun,Mobile SIM Card,Female,1,Poor,52,1.5GB 2-Day Plan,600,14,8400,129.63,No,
CUST0260,Amina Johns,Feb-25,33,Zamfara,Mobile SIM Card,Male,1,Poor,58,1GB+1.5mins Daily Plan,500,7,3500,189.48,Yes,Poor Customer Service
CUST0261,Obinna Simon,Mar-25,39,Zamfara,4G Router,Female,4,Very Good,11,165GB Monthly Plan,35000,4,140000,77.4,No,
CUST0262,Funke Alexander,Feb-25,41,Bauchi,Broadband MiFi,Female,5,Excellent,53,30GB Monthly Broadband Plan,9000,5,45000,96.71,Yes,Fast Data Consumption
CUST0263,Sarah Fritz,Feb-25,70,Osun,Broadband MiFi,Female,3,Good,51,300GB FUP Monthly Unlimited,30000,8,240000,95.69,No,
CUST0264,Tunde Smith,Feb-25,31,Bauchi,Mobile SIM Card,Male,3,Good,25,165GB Monthly Plan,35000,9,315000,130.49,No,
CUST0265,Saidu Martinez,Feb-25,70,Gombe,Mobile SIM Card,Female,2,Fair,44,16.5GB+10mins Monthly Plan,6500,9,58500,111.2,No,
CUST0266,Nura Hunter,Feb-25,73,Abuja (FCT),Broadband MiFi,Male,3,Good,14,30GB Monthly Broadband Plan,9000,5,45000,160.97,No,
CUST0267,Ejiro Mendoza,Feb-25,26,Rivers,Broadband MiFi,Female,5,Excellent,60,60GB Monthly Broadband Plan,14500,7,101500,88.07,No,
CUST0268,Michael Peterson,Feb-25,45,Abuja (FCT),5G Broadband Router,Male,1,Poor,24,450GB 3-Month Broadband Plan,75000,13,975000,70.95,No,
CUST0269,Tamuno Diaz,Jan-25,41,Bauchi,5G Broadband Router,Male,1,Poor,48,60GB Monthly Broadband Plan,14500,7,101500,121.47,No,
CUST0270,Michael Rodriguez,Jan-25,29,Kaduna,5G Broadband Router,Female,5,Excellent,22,450GB 3-Month Broadband Plan,75000,8,600000,112.85,No,
CUST0271,John Benson,Feb-25,30,Edo,5G Broadband Router,Male,2,Fair,25,30GB Monthly Broadband Plan,9000,9,81000,140.31,No,
CUST0272,Tega Cooper,Mar-25,25,Enugu,Mobile SIM Card,Female,2,Fair,21,10GB+10mins Monthly Plan,4500,7,31500,100.05,No,
CUST0273,Fatima Lewis,Mar-25,45,Benue,Broadband MiFi,Male,2,Fair,54,60GB Monthly Broadband Plan,14500,18,261000,122.96,No,
CUST0274,Bola Duffy,Mar-25,77,Gombe,5G Broadband Router,Female,4,Very Good,32,300GB FUP Monthly Unlimited,30000,14,420000,11.3,Yes,Better Offers from Competitors
CUST0275,Zina Gallegos,Jan-25,31,Bauchi,Broadband MiFi,Female,1,Poor,21,300GB FUP Monthly Unlimited,30000,9,270000,122.75,No,
CUST0276,Zainab Rogers,Feb-25,76,Bayelsa,5G Broadband Router,Female,4,Very Good,12,120GB Monthly Broadband Plan,24000,19,456000,90.42,Yes,High Call Tarriffs
CUST0277,Ngozi Dunn,Feb-25,50,Imo,Mobile SIM Card,Female,2,Fair,55,2.5GB 2-Day Plan,900,16,14400,35.73,Yes,High Call Tarriffs
CUST0278,Amaka Johnson,Jan-25,56,Yobe,4G Router,Female,4,Very Good,17,25GB Monthly Plan,9000,4,36000,95.57,Yes,Poor Customer Service
CUST0279,Alabo Carlson,Mar-25,58,Edo,Mobile SIM Card,Female,3,Good,24,10GB+10mins Monthly Plan,4500,10,45000,195.88,Yes,Poor Network
CUST0280,Grace Brock,Mar-25,73,Katsina,4G Router,Female,4,Very Good,40,25GB Monthly Plan,9000,20,180000,84.65,No,
CUST0281,Tamuno Ortiz,Feb-25,25,Katsina,5G Broadband Router,Male,3,Good,22,450GB 3-Month Broadband Plan,75000,15,1125000,54.61,No,
CUST0282,Alabo Chavez,Jan-25,68,Abuja (FCT),5G Broadband Router,Male,2,Fair,55,60GB Monthly Broadband Plan,14500,4,58000,33.8,No,
CUST0283,Sarah Ballard,Feb-25,26,Anambra,5G Broadband Router,Female,1,Poor,40,60GB Monthly Broadband Plan,14500,15,217500,147.65,No,
CUST0284,Funke Shaffer,Feb-25,20,Ekiti,5G Broadband Router,Female,4,Very Good,56,300GB FUP Monthly Unlimited,30000,18,540000,193.92,No,
CUST0285,Maryam Gates,Jan-25,60,Taraba,5G Broadband Router,Male,4,Very Good,52,120GB Monthly Broadband Plan,24000,17,408000,2.61,No,
CUST0286,David George,Jan-25,17,Yobe,4G Router,Female,4,Very Good,20,10GB+10mins Monthly Plan,4500,18,81000,82.64,No,
CUST0287,Omamuzo Rivera,Feb-25,64,Osun,5G Broadband Router,Female,2,Fair,6,450GB 3-Month Broadband Plan,75000,3,225000,38.01,No,
CUST0288,Grace Chaney,Jan-25,40,Niger,5G Broadband Router,Male,5,Excellent,10,1.5TB Yearly Broadband Plan,150000,8,1200000,145.56,Yes,Poor Network
CUST0289,Fatima Wheeler,Feb-25,59,Kogi,5G Broadband Router,Female,3,Good,51,150GB FUP Monthly Unlimited,20000,5,100000,168.79,No,
CUST0290,Sade Ryan,Feb-25,50,Kebbi,Mobile SIM Card,Male,2,Fair,35,3.2GB 2-Day Plan,1000,8,8000,194.93,Yes,Better Offers from Competitors
CUST0291,Halima Mahoney,Jan-25,20,Benue,Mobile SIM Card,Female,5,Excellent,48,20GB Monthly Plan,7500,10,75000,136.45,No,
CUST0292,Ese Rose,Feb-25,36,Rivers,4G Router,Male,3,Good,17,165GB Monthly Plan,35000,6,210000,65.24,Yes,Poor Network
CUST0293,John Jones,Feb-25,35,Gombe,Broadband MiFi,Male,4,Very Good,16,300GB FUP Monthly Unlimited,30000,18,540000,129.09,Yes,Relocation
CUST0294,Ese Bailey,Feb-25,60,Nasarawa,Broadband MiFi,Male,3,Good,2,60GB Monthly Broadband Plan,14500,18,261000,112.03,No,
CUST0295,David Higgins,Feb-25,60,Niger,5G Broadband Router,Female,1,Poor,18,200GB Monthly Broadband Plan,25000,17,425000,91.09,No,
CUST0296,Ejiro Scott,Feb-25,46,Niger,4G Router,Male,2,Fair,43,25GB Monthly Plan,9000,11,99000,64.86,No,
CUST0297,Bola Spencer,Jan-25,32,Enugu,Mobile SIM Card,Male,4,Very Good,13,16.5GB+10mins Monthly Plan,6500,19,123500,124.98,Yes,Poor Network
CUST0298,Grace Davis,Feb-25,26,Sokoto,5G Broadband Router,Male,3,Good,24,30GB Monthly Broadband Plan,9000,10,90000,146.99,No,
CUST0299,Kunle Fuller,Feb-25,43,Bauchi,4G Router,Male,5,Excellent,7,10GB+10mins Monthly Plan,4500,18,81000,111.91,No,
CUST0300,Ibim Wilkerson,Feb-25,29,Ekiti,Mobile SIM Card,Female,1,Poor,45,1.5GB 2-Day Plan,600,20,12000,107.01,Yes,Poor Customer Service
CUST0301,Boma Knight,Mar-25,57,Imo,Mobile SIM Card,Male,3,Good,25,2.5GB 2-Day Plan,900,20,18000,196.6,No,
CUST0302,Tunde Wallace,Mar-25,54,Osun,5G Broadband Router,Male,1,Poor,55,150GB FUP Monthly Unlimited,20000,12,240000,8.03,No,
CUST0303,Maryam Walker,Jan-25,27,Kebbi,Mobile SIM Card,Male,3,Good,47,3.2GB 2-Day Plan,1000,10,10000,119.25,No,
CUST0304,Bola Castro,Mar-25,64,Katsina,Mobile SIM Card,Male,3,Good,59,500MB Daily Plan,350,20,7000,149.66,No,
CUST0305,Sade Shepard,Feb-25,55,Bauchi,Mobile SIM Card,Male,3,Good,21,65GB Monthly Plan,16000,13,208000,134.89,No,
CUST0306,Alabo Cortez,Mar-25,80,Katsina,Mobile SIM Card,Male,4,Very Good,28,2.5GB 2-Day Plan,900,9,8100,109.86,Yes,Costly Data Plans
CUST0307,Chinedu Hoffman,Feb-25,67,Zamfara,Mobile SIM Card,Female,2,Fair,50,20GB Monthly Plan,7500,7,52500,130.62,No,
CUST0308,Sarah Flores,Feb-25,47,Imo,Broadband MiFi,Male,3,Good,18,60GB Monthly Broadband Plan,14500,7,101500,73.37,No,
CUST0309,Alabo Guerra,Feb-25,34,Nasarawa,Broadband MiFi,Male,2,Fair,60,30GB Monthly Broadband Plan,9000,8,72000,148.05,No,
CUST0310,Obinna Ballard,Jan-25,52,Lagos,5G Broadband Router,Female,3,Good,45,60GB Monthly Broadband Plan,14500,7,101500,148.13,No,
CUST0311,Fatima Freeman,Jan-25,49,Taraba,Broadband MiFi,Male,4,Very Good,45,30GB Monthly Broadband Plan,9000,20,180000,57.16,No,
CUST0312,Ejiro Barker,Feb-25,29,Kano,Broadband MiFi,Female,2,Fair,56,120GB Monthly Broadband Plan,24000,6,144000,106.55,No,
CUST0313,Maryam Hernandez,Feb-25,58,Yobe,5G Broadband Router,Female,1,Poor,48,120GB Monthly Broadband Plan,24000,17,408000,47.62,No,
CUST0314,Omamuzo King,Mar-25,19,Akwa Ibom,Mobile SIM Card,Male,4,Very Good,10,500MB Daily Plan,350,19,6650,83.76,No,
CUST0315,Obinna Anderson,Feb-25,70,Abia,4G Router,Female,2,Fair,29,10GB+10mins Monthly Plan,4500,5,22500,86.3,No,
CUST0316,Shehu Rogers,Mar-25,56,Plateau,Mobile SIM Card,Male,4,Very Good,49,1GB+1.5mins Daily Plan,500,7,3500,30.82,No,
CUST0317,Zainab Shaw,Jan-25,45,Osun,4G Router,Male,3,Good,44,165GB Monthly Plan,35000,12,420000,142.55,Yes,Better Offers from Competitors
CUST0318,John Martinez,Jan-25,33,Abuja (FCT),5G Broadband Router,Male,4,Very Good,15,450GB 3-Month Broadband Plan,75000,7,525000,44.9,No,
CUST0319,Fatima Powell,Feb-25,24,Enugu,Mobile SIM Card,Female,3,Good,56,20GB Monthly Plan,7500,20,150000,155.35,No,
CUST0320,Omamuzo Perez,Jan-25,56,Kebbi,4G Router,Male,4,Very Good,34,165GB Monthly Plan,35000,2,70000,196.77,No,
CUST0321,Omamuzo Schwartz,Feb-25,22,Benue,Mobile SIM Card,Female,3,Good,29,20GB Monthly Plan,7500,2,15000,59.24,No,
CUST0322,Alabo Jackson,Feb-25,27,Zamfara,Broadband MiFi,Male,4,Very Good,12,60GB Monthly Broadband Plan,14500,7,101500,118.27,No,
CUST0323,Amina Nguyen,Feb-25,31,Katsina,4G Router,Male,3,Good,46,165GB Monthly Plan,35000,6,210000,9.26,Yes,High Call Tarriffs
CUST0324,Amina Taylor,Mar-25,34,Enugu,5G Broadband Router,Male,3,Good,27,300GB FUP Monthly Unlimited,30000,5,150000,23.95,No,
CUST0325,Tunde Terry,Jan-25,74,Yobe,4G Router,Female,5,Excellent,35,165GB Monthly Plan,35000,15,525000,91.02,No,
CUST0326,Chinedu Krueger,Feb-25,16,Imo,Mobile SIM Card,Female,1,Poor,40,2.5GB 2-Day Plan,900,20,18000,133.57,Yes,Poor Network
CUST0327,Maryam Rhodes,Feb-25,58,Katsina,4G Router,Male,2,Fair,7,65GB Monthly Plan,16000,10,160000,19.08,Yes,Costly Data Plans
CUST0328,Kunle Liu,Mar-25,53,Taraba,4G Router,Male,3,Good,8,65GB Monthly Plan,16000,17,272000,22.31,No,
CUST0329,Saidu Anderson,Feb-25,61,Borno,4G Router,Female,4,Very Good,34,10GB+10mins Monthly Plan,4500,1,4500,0.82,No,
CUST0330,Ibim Harrison,Feb-25,21,Bayelsa,5G Broadband Router,Female,1,Poor,36,120GB Monthly Broadband Plan,24000,18,432000,60.41,No,
CUST0331,Funke Francis,Mar-25,38,Benue,4G Router,Female,4,Very Good,54,165GB Monthly Plan,35000,15,525000,31.5,No,
CUST0332,David Ward,Jan-25,58,Sokoto,5G Broadband Router,Female,5,Excellent,60,60GB Monthly Broadband Plan,14500,11,159500,115.69,Yes,High Call Tarriffs
CUST0333,Omamuzo Miller,Jan-25,37,Jigawa,Broadband MiFi,Male,3,Good,39,60GB Monthly Broadband Plan,14500,8,116000,17.82,No,
CUST0334,Fatima Carter,Jan-25,54,Enugu,Broadband MiFi,Male,2,Fair,24,120GB Monthly Broadband Plan,24000,11,264000,31.24,No,
CUST0335,Maryam Patterson,Feb-25,57,Plateau,Mobile SIM Card,Male,2,Fair,53,16.5GB+10mins Monthly Plan,6500,10,65000,23.61,No,
CUST0336,Chinedu Reynolds,Mar-25,58,Sokoto,4G Router,Male,1,Poor,7,10GB+10mins Monthly Plan,4500,9,40500,38.91,No,
CUST0337,Ifeanyi Cunningham,Jan-25,50,Plateau,Broadband MiFi,Male,1,Poor,18,120GB Monthly Broadband Plan,24000,5,120000,64.04,No,
CUST0338,David Crosby,Feb-25,72,Oyo,Mobile SIM Card,Male,1,Poor,2,20GB Monthly Plan,7500,20,150000,36.21,Yes,Poor Network
CUST0339,Alabo Davis,Feb-25,61,Abia,4G Router,Female,5,Excellent,53,165GB Monthly Plan,35000,10,350000,19.9,Yes,Better Offers from Competitors
CUST0340,Obinna Thomas,Mar-25,49,Gombe,Broadband MiFi,Female,3,Good,12,60GB Monthly Broadband Plan,14500,16,232000,23.02,No,
CUST0341,Zina Valenzuela,Feb-25,37,Cross River,Broadband MiFi,Female,5,Excellent,39,300GB FUP Monthly Unlimited,30000,13,390000,106.78,Yes,Better Offers from Competitors
CUST0342,Omamuzo Holmes,Feb-25,24,Bayelsa,4G Router,Male,4,Very Good,53,65GB Monthly Plan,16000,19,304000,148,No,
CUST0343,Zina Diaz,Mar-25,57,Anambra,Mobile SIM Card,Female,4,Very Good,12,2.5GB 2-Day Plan,900,5,4500,18.56,Yes,Poor Network
CUST0344,Alabo Baker,Mar-25,41,Ondo,Broadband MiFi,Female,4,Very Good,20,30GB Monthly Broadband Plan,9000,17,153000,122.49,No,
CUST0345,Sade Mercer,Mar-25,63,Oyo,4G Router,Male,1,Poor,46,165GB Monthly Plan,35000,13,455000,140.59,No,
CUST0346,Ese Harper,Feb-25,64,Kebbi,Mobile SIM Card,Female,2,Fair,28,7GB Monthly Plan,3500,5,17500,168.07,No,
CUST0347,Abubakar Mcknight,Jan-25,32,Borno,Mobile SIM Card,Male,2,Fair,5,3.2GB 2-Day Plan,1000,14,14000,27.88,No,
CUST0348,Boma Anderson,Feb-25,39,Sokoto,Mobile SIM Card,Female,4,Very Good,36,2.5GB 2-Day Plan,900,8,7200,115.8,No,
CUST0349,Michael Smith,Jan-25,50,Kogi,Broadband MiFi,Female,5,Excellent,3,60GB Monthly Broadband Plan,14500,3,43500,192.37,No,
CUST0350,Zainab Compton,Jan-25,75,Bauchi,Broadband MiFi,Male,2,Fair,34,120GB Monthly Broadband Plan,24000,11,264000,11.03,No,
CUST0351,Ibim Mills,Jan-25,61,Cross River,5G Broadband Router,Female,5,Excellent,11,300GB FUP Monthly Unlimited,30000,10,300000,114.79,No,
CUST0352,Zainab Rivera,Mar-25,48,Borno,4G Router,Female,1,Poor,18,165GB Monthly Plan,35000,6,210000,74.27,No,
CUST0353,Bola Patterson,Feb-25,59,Katsina,Mobile SIM Card,Male,4,Very Good,39,12.5GB Monthly Plan,5500,6,33000,145.34,No,
CUST0354,Sade Brown,Feb-25,49,Delta,4G Router,Male,4,Very Good,11,165GB Monthly Plan,35000,5,175000,95.18,No,
CUST0355,Abubakar Martin,Jan-25,73,Jigawa,5G Broadband Router,Female,1,Poor,34,200GB Monthly Broadband Plan,25000,4,100000,54.43,No,
CUST0356,Bala Gibson,Jan-25,59,Enugu,Mobile SIM Card,Female,1,Poor,36,3.2GB 2-Day Plan,1000,15,15000,105.29,No,
CUST0357,Oghene Winters,Jan-25,44,Cross River,4G Router,Female,1,Poor,13,65GB Monthly Plan,16000,4,64000,141.76,No,
CUST0358,Chinedu Smith,Jan-25,32,Jigawa,Broadband MiFi,Male,2,Fair,58,300GB FUP Monthly Unlimited,30000,11,330000,153.99,Yes,Fast Data Consumption
CUST0359,Omamuzo Juarez,Mar-25,58,Oyo,4G Router,Female,2,Fair,53,165GB Monthly Plan,35000,16,560000,36.1,No,
CUST0360,Fatima Webb,Jan-25,29,Nasarawa,Mobile SIM Card,Female,1,Poor,7,12.5GB Monthly Plan,5500,1,5500,30.2,Yes,High Call Tarriffs
CUST0361,Obinna Andrews,Feb-25,58,Kebbi,Broadband MiFi,Male,4,Very Good,33,30GB Monthly Broadband Plan,9000,16,144000,77.19,No,
CUST0362,Sade Donaldson,Feb-25,27,Gombe,Broadband MiFi,Female,3,Good,6,60GB Monthly Broadband Plan,14500,10,145000,132.32,No,
CUST0363,Omamuzo Alexander,Feb-25,29,Ekiti,4G Router,Female,2,Fair,6,165GB Monthly Plan,35000,18,630000,78.06,Yes,Poor Customer Service
CUST0364,Maryam Harmon,Jan-25,79,Adamawa,Broadband MiFi,Female,3,Good,2,150GB FUP Monthly Unlimited,20000,17,340000,161.52,Yes,Better Offers from Competitors
CUST0365,Kunle Myers,Jan-25,20,Plateau,Broadband MiFi,Female,4,Very Good,42,30GB Monthly Broadband Plan,9000,2,18000,34.86,No,
CUST0366,Kunle Brady,Feb-25,29,Delta,5G Broadband Router,Female,1,Poor,39,450GB 3-Month Broadband Plan,75000,19,1425000,65.18,No,
CUST0367,Bola Carpenter,Mar-25,38,Bayelsa,5G Broadband Router,Male,2,Fair,8,300GB FUP Monthly Unlimited,30000,19,570000,88.01,No,
CUST0368,Bola Meadows,Feb-25,33,Anambra,Broadband MiFi,Female,1,Poor,50,30GB Monthly Broadband Plan,9000,3,27000,36.29,No,
CUST0369,Abubakar Rodriguez,Feb-25,69,Taraba,4G Router,Male,3,Good,14,65GB Monthly Plan,16000,16,256000,119.46,No,
CUST0370,Oghene Bush,Jan-25,69,Lagos,5G Broadband Router,Male,5,Excellent,13,1.5TB Yearly Broadband Plan,150000,7,1050000,154.18,No,
CUST0371,Grace Wilkerson,Mar-25,38,Abuja (FCT),Mobile SIM Card,Male,3,Good,4,3.2GB 2-Day Plan,1000,18,18000,148.21,Yes,Costly Data Plans
CUST0372,Grace Salas,Feb-25,30,Kaduna,4G Router,Male,5,Excellent,47,25GB Monthly Plan,9000,4,36000,46.4,No,
CUST0373,Ibim Adams,Feb-25,41,Jigawa,4G Router,Male,5,Excellent,5,165GB Monthly Plan,35000,12,420000,36.02,No,
CUST0374,Oghene Oliver,Jan-25,50,Benue,Mobile SIM Card,Female,5,Excellent,9,12.5GB Monthly Plan,5500,11,60500,83.94,Yes,Poor Customer Service
CUST0375,Nura Oconnell,Feb-25,53,Abuja (FCT),Mobile SIM Card,Male,1,Poor,37,12.5GB Monthly Plan,5500,14,77000,56.19,No,
CUST0376,Obinna Miller,Feb-25,16,Kogi,Mobile SIM Card,Male,5,Excellent,3,3.2GB 2-Day Plan,1000,8,8000,90.76,Yes,Relocation
CUST0377,Chinedu Christian,Mar-25,17,Kogi,Mobile SIM Card,Male,3,Good,9,1GB+1.5mins Daily Plan,500,15,7500,32.78,Yes,Poor Network
CUST0378,Funke Carlson,Feb-25,74,Sokoto,Mobile SIM Card,Male,2,Fair,56,2.5GB 2-Day Plan,900,3,2700,172.15,No,
CUST0379,Sarah Woods,Mar-25,20,Cross River,Broadband MiFi,Female,5,Excellent,49,120GB Monthly Broadband Plan,24000,2,48000,176.23,No,
CUST0380,Michael Jacobs,Mar-25,62,Oyo,5G Broadband Router,Male,4,Very Good,25,150GB FUP Monthly Unlimited,20000,7,140000,112.37,No,
CUST0381,David Murphy,Feb-25,30,Taraba,Mobile SIM Card,Male,3,Good,49,2.5GB 2-Day Plan,900,12,10800,13.14,No,
CUST0382,Ifeanyi Cooper,Mar-25,76,Adamawa,Broadband MiFi,Female,1,Poor,29,60GB Monthly Broadband Plan,14500,10,145000,179.64,Yes,Fast Data Consumption
CUST0383,Kunle Manning,Feb-25,29,Abuja (FCT),Broadband MiFi,Female,4,Very Good,8,120GB Monthly Broadband Plan,24000,16,384000,186.38,Yes,Poor Customer Service
CUST0384,Nura Rodriguez,Mar-25,58,Kogi,Mobile SIM Card,Female,4,Very Good,42,1.5GB 2-Day Plan,600,10,6000,179.71,No,
CUST0385,Sade George,Feb-25,34,Ekiti,5G Broadband Router,Female,5,Excellent,30,300GB FUP Monthly Unlimited,30000,4,120000,32.67,No,
CUST0386,Shehu Torres,Feb-25,42,Rivers,5G Broadband Router,Female,3,Good,23,150GB FUP Monthly Unlimited,20000,13,260000,184.13,No,
CUST0387,Grace Walsh,Jan-25,34,Sokoto,5G Broadband Router,Female,5,Excellent,10,120GB Monthly Broadband Plan,24000,19,456000,193.94,No,
CUST0388,Tega Cervantes,Jan-25,30,Taraba,Mobile SIM Card,Male,3,Good,9,7GB Monthly Plan,3500,2,7000,18.95,Yes,Relocation
CUST0389,Bala Dunn,Jan-25,44,Akwa Ibom,Broadband MiFi,Male,5,Excellent,2,150GB FUP Monthly Unlimited,20000,20,400000,98.35,No,
CUST0390,Ejiro Gonzalez,Mar-25,65,Gombe,Broadband MiFi,Male,3,Good,19,60GB Monthly Broadband Plan,14500,14,203000,148.43,No,
CUST0391,Ibim Schwartz,Mar-25,33,Katsina,5G Broadband Router,Male,4,Very Good,14,150GB FUP Monthly Unlimited,20000,9,180000,1.82,No,
CUST0392,Abubakar Hayes,Mar-25,78,Rivers,4G Router,Female,4,Very Good,54,65GB Monthly Plan,16000,10,160000,31.23,No,
CUST0393,Ibim Ballard,Jan-25,38,Yobe,5G Broadband Router,Male,3,Good,2,1.5TB Yearly Broadband Plan,150000,9,1350000,113.33,No,
CUST0394,John Nielsen,Mar-25,31,Gombe,5G Broadband Router,Male,2,Fair,55,1.5TB Yearly Broadband Plan,150000,5,750000,175.72,No,
CUST0395,Oghene Pacheco,Feb-25,36,Oyo,Broadband MiFi,Female,3,Good,24,150GB FUP Monthly Unlimited,20000,20,400000,153.06,Yes,Costly Data Plans
CUST0396,Ngozi Johnson,Mar-25,61,Plateau,5G Broadband Router,Male,3,Good,9,150GB FUP Monthly Unlimited,20000,17,340000,43.97,No,
CUST0397,Sarah Perry,Jan-25,30,Kogi,Mobile SIM Card,Female,1,Poor,59,7GB Monthly Plan,3500,12,42000,62.66,No,
CUST0398,Amaka Shannon,Mar-25,72,Bauchi,4G Router,Female,1,Poor,12,10GB+10mins Monthly Plan,4500,5,22500,171.43,No,
CUST0399,Nura Delgado,Jan-25,55,Borno,Broadband MiFi,Male,4,Very Good,9,30GB Monthly Broadband Plan,9000,14,126000,155.05,No,
CUST0400,Bola Vincent,Jan-25,41,Anambra,Broadband MiFi,Male,4,Very Good,51,300GB FUP Monthly Unlimited,30000,4,120000,133.68,Yes,Costly Data Plans
CUST0401,Ifeanyi Adkins,Mar-25,42,Benue,5G Broadband Router,Male,1,Poor,43,200GB Monthly Broadband Plan,25000,17,425000,32.53,Yes,Better Offers from Competitors
CUST0402,Sarah Oconnor,Jan-25,43,Benue,Mobile SIM Card,Female,1,Poor,11,12.5GB Monthly Plan,5500,4,22000,134.87,No,
CUST0403,Ibim Soto,Jan-25,30,Niger,5G Broadband Router,Male,5,Excellent,30,30GB Monthly Broadband Plan,9000,16,144000,16.91,Yes,Better Offers from Competitors
CUST0404,Maryam Buck,Feb-25,72,Osun,5G Broadband Router,Female,2,Fair,19,30GB Monthly Broadband Plan,9000,16,144000,199.75,No,
CUST0405,Chinedu Brown,Jan-25,31,Plateau,4G Router,Female,2,Fair,26,165GB Monthly Plan,35000,14,490000,24.99,Yes,Poor Customer Service
CUST0406,Zainab Soto,Feb-25,67,Ekiti,Mobile SIM Card,Female,4,Very Good,43,3.2GB 2-Day Plan,1000,16,16000,24.88,No,
CUST0407,Grace Thompson,Jan-25,45,Borno,4G Router,Male,1,Poor,7,165GB Monthly Plan,35000,11,385000,121.11,No,
CUST0408,Obinna Daniels,Feb-25,54,Anambra,Mobile SIM Card,Male,4,Very Good,43,1GB+1.5mins Daily Plan,500,18,9000,108.72,Yes,High Call Tarriffs
CUST0409,Boma Burns,Feb-25,31,Jigawa,4G Router,Female,4,Very Good,21,25GB Monthly Plan,9000,6,54000,177,No,
CUST0410,Grace Snyder,Feb-25,71,Borno,Mobile SIM Card,Female,4,Very Good,46,12.5GB Monthly Plan,5500,6,33000,112.67,No,
CUST0411,Abubakar Lane,Jan-25,57,Oyo,Broadband MiFi,Male,2,Fair,38,300GB FUP Monthly Unlimited,30000,14,420000,76.42,No,
CUST0412,Oghene Bartlett,Mar-25,23,Imo,5G Broadband Router,Male,5,Excellent,16,150GB FUP Monthly Unlimited,20000,1,20000,67.85,Yes,High Call Tarriffs
CUST0413,David Giles,Feb-25,57,Rivers,5G Broadband Router,Female,5,Excellent,43,1.5TB Yearly Broadband Plan,150000,11,1650000,117.8,No,
CUST0414,Ngozi Williams,Feb-25,78,Anambra,5G Broadband Router,Male,5,Excellent,22,200GB Monthly Broadband Plan,25000,7,175000,193.9,No,
CUST0415,Maryam Anthony,Jan-25,67,Osun,Mobile SIM Card,Male,5,Excellent,46,20GB Monthly Plan,7500,3,22500,42.34,No,
CUST0416,Maryam Blankenship,Mar-25,80,Abia,Mobile SIM Card,Female,2,Fair,43,16.5GB+10mins Monthly Plan,6500,1,6500,36.53,No,
CUST0417,Zina Hernandez,Jan-25,50,Adamawa,4G Router,Female,5,Excellent,60,10GB+10mins Monthly Plan,4500,10,45000,149.41,Yes,Fast Data Consumption
CUST0418,Boma Johnson,Feb-25,68,Niger,4G Router,Male,4,Very Good,41,165GB Monthly Plan,35000,5,175000,48.08,Yes,Costly Data Plans
CUST0419,Boma Sanchez,Feb-25,20,Benue,4G Router,Male,1,Poor,18,65GB Monthly Plan,16000,16,256000,192.78,Yes,Better Offers from Competitors
CUST0420,Ese Miller,Mar-25,54,Kaduna,4G Router,Female,1,Poor,58,65GB Monthly Plan,16000,19,304000,104.63,No,
CUST0421,Tega Stokes,Feb-25,65,Imo,Mobile SIM Card,Female,1,Poor,14,2.5GB 2-Day Plan,900,12,10800,98.33,Yes,Costly Data Plans
CUST0422,John Smith,Feb-25,47,Akwa Ibom,Broadband MiFi,Male,3,Good,24,30GB Monthly Broadband Plan,9000,8,72000,138.29,No,
CUST0423,Saidu Smith,Jan-25,65,Abia,Mobile SIM Card,Female,5,Excellent,58,20GB Monthly Plan,7500,9,67500,185.54,No,
CUST0424,Maryam Becker,Mar-25,42,Abuja (FCT),Broadband MiFi,Female,4,Very Good,41,60GB Monthly Broadband Plan,14500,11,159500,147.52,No,
CUST0425,Amina Ortega,Feb-25,49,Zamfara,5G Broadband Router,Male,5,Excellent,23,30GB Monthly Broadband Plan,9000,6,54000,128.45,No,
CUST0426,Ese Mathis,Feb-25,26,Delta,Mobile SIM Card,Male,5,Excellent,16,1.5GB 2-Day Plan,600,19,11400,52.51,No,
CUST0427,Chinedu West,Feb-25,69,Gombe,4G Router,Male,5,Excellent,26,10GB+10mins Monthly Plan,4500,6,27000,52.73,Yes,Poor Network
CUST0428,Amina Skinner,Feb-25,31,Lagos,4G Router,Female,4,Very Good,50,25GB Monthly Plan,9000,16,144000,57.95,Yes,High Call Tarriffs
CUST0429,Omamuzo Smith,Feb-25,32,Kwara,Mobile SIM Card,Male,3,Good,39,1.5GB 2-Day Plan,600,5,3000,82,No,
CUST0430,Funke Lawson,Feb-25,53,Edo,Mobile SIM Card,Male,2,Fair,40,12.5GB Monthly Plan,5500,11,60500,27.07,No,
CUST0431,Kunle Cooper,Feb-25,28,Oyo,Broadband MiFi,Male,4,Very Good,22,120GB Monthly Broadband Plan,24000,10,240000,124.12,No,
CUST0432,Amina Espinoza,Jan-25,80,Yobe,Mobile SIM Card,Female,2,Fair,57,3.2GB 2-Day Plan,1000,5,5000,63,Yes,High Call Tarriffs
CUST0433,Saidu Whitehead,Feb-25,49,Bauchi,4G Router,Female,3,Good,28,165GB Monthly Plan,35000,5,175000,11.12,No,
CUST0434,John Williams,Jan-25,49,Abuja (FCT),Mobile SIM Card,Female,4,Very Good,28,3.2GB 2-Day Plan,1000,5,5000,169.24,Yes,Costly Data Plans
CUST0435,Michael Santana,Feb-25,50,Ondo,Mobile SIM Card,Male,4,Very Good,34,3.2GB 2-Day Plan,1000,1,1000,177.53,No,
CUST0436,Abubakar Bullock,Jan-25,31,Kebbi,Mobile SIM Card,Female,3,Good,38,1GB+1.5mins Daily Plan,500,1,500,119.04,Yes,Poor Network
CUST0437,Alabo Young,Jan-25,57,Borno,Broadband MiFi,Male,3,Good,56,120GB Monthly Broadband Plan,24000,13,312000,190.4,No,
CUST0438,Chinedu Ramos,Jan-25,67,Edo,Mobile SIM Card,Male,1,Poor,16,20GB Monthly Plan,7500,5,37500,57.34,Yes,Poor Customer Service
CUST0439,Ifeanyi Zimmerman,Mar-25,54,Yobe,5G Broadband Router,Female,5,Excellent,48,60GB Monthly Broadband Plan,14500,13,188500,98.18,Yes,High Call Tarriffs
CUST0440,John Carter,Jan-25,50,Kwara,Mobile SIM Card,Male,3,Good,49,2.5GB 2-Day Plan,900,15,13500,102.91,No,
CUST0441,Grace Williams,Jan-25,26,Cross River,5G Broadband Router,Female,4,Very Good,28,60GB Monthly Broadband Plan,14500,10,145000,104.86,No,
CUST0442,Sade Johnson,Jan-25,25,Rivers,5G Broadband Router,Male,4,Very Good,33,150GB FUP Monthly Unlimited,20000,1,20000,153.85,Yes,High Call Tarriffs
CUST0443,Bola Wright,Jan-25,26,Kogi,5G Broadband Router,Female,4,Very Good,21,60GB Monthly Broadband Plan,14500,20,290000,37.42,No,
CUST0444,Boma Shah,Jan-25,18,Lagos,Mobile SIM Card,Female,2,Fair,8,16.5GB+10mins Monthly Plan,6500,20,130000,60.91,No,
CUST0445,Ejiro Wagner,Feb-25,66,Abia,4G Router,Male,1,Poor,9,65GB Monthly Plan,16000,5,80000,42.24,Yes,Better Offers from Competitors
CUST0446,Halima Lambert,Mar-25,71,Adamawa,Broadband MiFi,Male,4,Very Good,6,150GB FUP Monthly Unlimited,20000,15,300000,180.53,Yes,Fast Data Consumption
CUST0447,Grace Hudson,Feb-25,76,Kano,Broadband MiFi,Female,2,Fair,38,30GB Monthly Broadband Plan,9000,14,126000,20.98,Yes,Better Offers from Competitors
CUST0448,Abubakar Ryan,Jan-25,20,Yobe,Broadband MiFi,Female,2,Fair,32,120GB Monthly Broadband Plan,24000,14,336000,13.17,No,
CUST0449,Funke Chung,Mar-25,36,Cross River,5G Broadband Router,Male,4,Very Good,31,300GB FUP Monthly Unlimited,30000,13,390000,176.69,Yes,Poor Customer Service
CUST0450,Fatima Curtis,Feb-25,52,Katsina,Mobile SIM Card,Female,2,Fair,9,12.5GB Monthly Plan,5500,7,38500,61.08,Yes,Fast Data Consumption
CUST0451,Sade Baker,Feb-25,18,Ekiti,Mobile SIM Card,Female,2,Fair,23,12.5GB Monthly Plan,5500,8,44000,23.24,No,
CUST0452,Saidu Jackson,Mar-25,59,Ekiti,Broadband MiFi,Male,2,Fair,50,60GB Monthly Broadband Plan,14500,4,58000,159.9,No,
CUST0453,Michael Madden,Feb-25,29,Abuja (FCT),Mobile SIM Card,Male,3,Good,56,3.2GB 2-Day Plan,1000,12,12000,31.28,Yes,Costly Data Plans
CUST0454,Tunde Fuller,Feb-25,47,Taraba,5G Broadband Router,Female,1,Poor,19,60GB Monthly Broadband Plan,14500,17,246500,30.75,Yes,High Call Tarriffs
CUST0455,Boma Baker,Mar-25,68,Kogi,Broadband MiFi,Female,1,Poor,55,30GB Monthly Broadband Plan,9000,13,117000,67.99,No,
CUST0456,Amina Diaz,Jan-25,71,Oyo,5G Broadband Router,Female,2,Fair,49,450GB 3-Month Broadband Plan,75000,18,1350000,80.7,No,
CUST0457,Maryam Martin,Mar-25,56,Ekiti,Mobile SIM Card,Male,5,Excellent,53,12.5GB Monthly Plan,5500,18,99000,128.95,No,
CUST0458,Alabo Bradley,Mar-25,60,Kebbi,4G Router,Male,1,Poor,57,25GB Monthly Plan,9000,17,153000,43.14,Yes,Costly Data Plans
CUST0460,Ejiro Martin,Jan-25,49,Zamfara,Broadband MiFi,Female,1,Poor,8,150GB FUP Monthly Unlimited,20000,19,380000,161.17,No,
CUST0461,Halima Walker,Mar-25,29,Niger,Mobile SIM Card,Male,4,Very Good,53,3.2GB 2-Day Plan,1000,5,5000,12.91,Yes,High Call Tarriffs
CUST0462,Ejiro Brown,Mar-25,67,Bauchi,Mobile SIM Card,Female,5,Excellent,56,12.5GB Monthly Plan,5500,14,77000,146.48,No,
CUST0463,Grace Bell,Feb-25,74,Borno,4G Router,Male,4,Very Good,45,65GB Monthly Plan,16000,14,224000,120.52,No,
CUST0464,Ifeanyi Smith,Mar-25,63,Abia,Mobile SIM Card,Female,4,Very Good,20,2.5GB 2-Day Plan,900,10,9000,187.4,Yes,Poor Customer Service
CUST0465,Abubakar Ross,Jan-25,43,Enugu,Mobile SIM Card,Female,5,Excellent,1,12.5GB Monthly Plan,5500,19,104500,114.83,No,
CUST0466,Alabo Escobar,Feb-25,59,Jigawa,Mobile SIM Card,Female,2,Fair,54,12.5GB Monthly Plan,5500,11,60500,30.22,No,
CUST0467,Ibim Hunter,Jan-25,65,Osun,Broadband MiFi,Female,4,Very Good,22,120GB Monthly Broadband Plan,24000,10,240000,126.21,No,
CUST0468,David Boone,Jan-25,22,Bauchi,4G Router,Male,5,Excellent,49,65GB Monthly Plan,16000,7,112000,55.36,No,
CUST0469,Halima Matthews,Jan-25,72,Katsina,5G Broadband Router,Female,4,Very Good,26,450GB 3-Month Broadband Plan,75000,1,75000,36.51,No,
CUST0470,Sarah Gordon,Jan-25,56,Jigawa,4G Router,Female,1,Poor,6,25GB Monthly Plan,9000,5,45000,153.78,No,
CUST0471,Sade Wagner,Jan-25,57,Enugu,4G Router,Male,3,Good,46,25GB Monthly Plan,9000,4,36000,51.96,No,
CUST0472,Halima Adams,Mar-25,79,Zamfara,Mobile SIM Card,Female,1,Poor,8,2.5GB 2-Day Plan,900,8,7200,81.8,No,
CUST0473,Amaka Jackson,Feb-25,54,Kogi,4G Router,Female,2,Fair,6,165GB Monthly Plan,35000,18,630000,192.29,No,
CUST0474,Alabo Moreno,Mar-25,21,Lagos,5G Broadband Router,Female,2,Fair,54,450GB 3-Month Broadband Plan,75000,7,525000,199.85,Yes,Fast Data Consumption
CUST0475,David Park,Jan-25,24,Abia,Mobile SIM Card,Male,2,Fair,26,16.5GB+10mins Monthly Plan,6500,11,71500,191.5,No,
CUST0476,Zainab Lam,Jan-25,47,Niger,4G Router,Female,5,Excellent,14,165GB Monthly Plan,35000,1,35000,1.35,No,
CUST0478,Ifeanyi Ballard,Jan-25,75,Gombe,5G Broadband Router,Male,2,Fair,29,150GB FUP Monthly Unlimited,20000,10,200000,163.35,No,
CUST0479,Ejiro Stewart,Feb-25,20,Akwa Ibom,Mobile SIM Card,Female,1,Poor,58,16.5GB+10mins Monthly Plan,6500,18,117000,99.06,Yes,Better Offers from Competitors
CUST0480,Kunle Goodwin,Mar-25,32,Edo,5G Broadband Router,Male,2,Fair,57,1.5TB Yearly Broadband Plan,150000,14,2100000,0.89,No,
CUST0481,Sade Reed,Jan-25,57,Kwara,Broadband MiFi,Female,5,Excellent,18,150GB FUP Monthly Unlimited,20000,14,280000,9.87,No,
CUST0482,Bala Gibson,Feb-25,58,Katsina,4G Router,Male,4,Very Good,48,10GB+10mins Monthly Plan,4500,3,13500,66.18,No,
CUST0484,Ngozi Chan,Jan-25,76,Imo,Broadband MiFi,Female,3,Good,54,120GB Monthly Broadband Plan,24000,4,96000,124.1,No,
CUST0485,Alabo Anderson,Jan-25,31,Katsina,Broadband MiFi,Male,4,Very Good,59,60GB Monthly Broadband Plan,14500,20,290000,11.43,No,
CUST0486,Tamuno Hudson,Jan-25,28,Kogi,Broadband MiFi,Male,4,Very Good,56,30GB Monthly Broadband Plan,9000,11,99000,91.09,No,
CUST0487,Kunle Gilmore,Jan-25,40,Borno,4G Router,Female,4,Very Good,23,10GB+10mins Monthly Plan,4500,2,9000,159.51,No,
CUST0488,Michael Jones,Jan-25,61,Abia,5G Broadband Router,Male,3,Good,10,300GB FUP Monthly Unlimited,30000,17,510000,11.93,No,
CUST0489,Oghene Wilson,Jan-25,41,Benue,Mobile SIM Card,Male,3,Good,51,7GB Monthly Plan,3500,14,49000,123.41,Yes,Fast Data Consumption
CUST0490,Nura Cox,Jan-25,45,Sokoto,4G Router,Male,3,Good,16,10GB+10mins Monthly Plan,4500,1,4500,165.3,No,
CUST0491,Funke Smith,Feb-25,30,Plateau,Broadband MiFi,Female,5,Excellent,29,150GB FUP Monthly Unlimited,20000,6,120000,39.97,No,
CUST0492,Tega Kim,Feb-25,47,Enugu,4G Router,Male,3,Good,2,165GB Monthly Plan,35000,4,140000,131.15,No,
CUST0493,Tega Fischer,Mar-25,42,Abia,Mobile SIM Card,Female,3,Good,16,3.2GB 2-Day Plan,1000,5,5000,29.31,No,
CUST0494,Halima Martin,Feb-25,21,Benue,4G Router,Female,3,Good,51,165GB Monthly Plan,35000,3,105000,42.24,Yes,High Call Tarriffs
CUST0495,Kunle Brown,Mar-25,37,Zamfara,5G Broadband Router,Female,4,Very Good,49,200GB Monthly Broadband Plan,25000,16,400000,105.33,No,
CUST0496,Grace Matthews,Jan-25,76,Akwa Ibom,4G Router,Female,2,Fair,41,10GB+10mins Monthly Plan,4500,13,58500,61.55,Yes,Poor Customer Service
CUST0497,Saidu Baker,Jan-25,26,Borno,Broadband MiFi,Male,5,Excellent,19,60GB Monthly Broadband Plan,14500,14,203000,90.5,No,
CUST0498,Shehu Harris,Jan-25,72,Osun,Broadband MiFi,Female,3,Good,42,150GB FUP Monthly Unlimited,20000,3,60000,20.13,No,
CUST0499,Tega Hood,Mar-25,41,Bayelsa,5G Broadband Router,Female,2,Fair,20,30GB Monthly Broadband Plan,9000,10,90000,154.13,No,
CUST0500,Oghene Hamilton,Feb-25,67,Kebbi,4G Router,Male,4,Very Good,31,165GB Monthly Plan,35000,15,525000,144.64,Yes,High Call Tarriffs`;

export const parseCSV = (csv: string): CustomerRecord[] => {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  const records: CustomerRecord[] = [];

  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',');
    if (cols.length < headers.length) continue;

    records.push({
      id: cols[0],
      fullName: cols[1],
      dateOfPurchase: cols[2],
      age: parseInt(cols[3]),
      state: cols[4],
      device: cols[5],
      gender: cols[6],
      satisfactionRate: parseInt(cols[7]),
      satisfactionLabel: cols[8],
      review: cols[9],
      tenureMonths: parseInt(cols[9]), // Actually maps to tenure in months
      subscriptionPlan: cols[10],
      unitPrice: parseInt(cols[11]),
      purchaseCount: parseInt(cols[12]),
      totalRevenue: parseInt(cols[13]),
      dataUsage: parseFloat(cols[14]),
      churnStatus: cols[15] as 'Yes' | 'No',
      reasonForChurn: cols[16] || '',
    });
  }
  return records;
};

export const dataset = parseCSV(RAW_CSV_DATA);
