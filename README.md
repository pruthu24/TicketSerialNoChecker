# TicketSerialNoChecker

The code is used to validate a ticket using JavaScript. The ticket serial number contains first three digits as a Letter, next four digits as a year of the ticket, after that next digits range from two digits currency to thousand digit currency. At last it should end with a letter from A-Z.

So to begin with enter the ticket numbers as an array by calling the function ticket along with total number of  tickets provided as an array to the function

**EX:- ticket(["AZX200320L","JZA1905100A","JZ2A1905100A","UU2003A4","OPA1995300A","ASA2001A1S2X","ASA2001122A","A2A2001A1S2X","JZA1905100A"],9);**

Thus the output contains total number of ticket as a faulty ticket. In the above case "4" tickets are said to be invalid or faulty ticket.

Thus we can check the output by,

**console.log(finalOcc.length)**

# output:

**4**

Heance we can finally find the Ticket No/Serial No which is faulty and duplicate
