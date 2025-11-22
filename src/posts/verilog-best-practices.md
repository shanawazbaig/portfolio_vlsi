---
title: "Verilog Best Practices: Writing Clean RTL"
date: "2024-02-28"
description: "Essential tips and best practices for writing maintainable, synthesizable Verilog code that your future self will thank you for."
readTime: "6 min read"
tags: "Verilog, HDL, Best Practices, RTL"
---

# Writing Better Verilog Code

After years of working with Verilog, I've learned that clean, well-structured code is just as important in hardware design as it is in software development. Here are my top recommendations.

## 1. Always Use Non-Blocking Assignments in Sequential Logic

This is **critical** for avoiding simulation/synthesis mismatches:

```verilog
// ❌ BAD - Blocking assignments in sequential logic
always @(posedge clk) begin
    a = b;
    c = a;  // Uses NEW value of a
end

// ✅ GOOD - Non-blocking assignments
always @(posedge clk) begin
    a <= b;
    c <= a;  // Uses OLD value of a
end
```

## 2. Separate Combinational and Sequential Logic

Keep your always blocks focused:

```verilog
// Sequential logic
always @(posedge clk or negedge rst_n) begin
    if (!rst_n)
        state <= IDLE;
    else
        state <= next_state;
end

// Combinational logic
always @(*) begin
    case (state)
        IDLE: next_state = (start) ? ACTIVE : IDLE;
        ACTIVE: next_state = (done) ? IDLE : ACTIVE;
        default: next_state = IDLE;
    endcase
end
```

## 3. Use Parameters for Magic Numbers

Make your code configurable and readable:

```verilog
module fifo #(
    parameter DATA_WIDTH = 8,
    parameter DEPTH = 16,
    parameter ADDR_WIDTH = $clog2(DEPTH)
) (
    // ports...
);
```

## 4. Include Default Cases

Always include a default case in case statements to avoid latches:

```verilog
always @(*) begin
    case (opcode)
        2'b00: result = a + b;
        2'b01: result = a - b;
        2'b10: result = a & b;
        2'b11: result = a | b;
        default: result = '0;  // Prevents latches!
    endcase
end
```

## 5. Synchronous Resets Are Your Friend

Asynchronous resets can cause issues. Consider using synchronous resets:

```verilog
always @(posedge clk) begin
    if (rst) begin
        // Reset logic
        counter <= '0;
    end else begin
        // Normal operation
        counter <= counter + 1;
    end
end
```

## 6. Name Your Signals Meaningfully

Good naming conventions save debugging time:

```verilog
// ❌ BAD
wire a, b, c;
reg [7:0] x, y, z;

// ✅ GOOD
wire valid_input, ready_output, handshake_complete;
reg [7:0] pixel_data, threshold_value, filtered_output;
```

## 7. Use Assertions for Verification

SystemVerilog assertions catch bugs early:

```systemverilog
// Check that valid and ready don't stay high indefinitely
assert property (@(posedge clk) 
    valid && ready |-> ##[1:10] !valid
);
```

## Common Pitfalls to Avoid

| Issue | Problem | Solution |
|-------|---------|----------|
| Latches | Incomplete case/if statements | Add default cases |
| Race conditions | Mixing blocking/non-blocking | Follow assignment rules |
| Metastability | Async inputs | Use synchronizers |
| Timing violations | Combinational loops | Break with registers |

## Conclusion

Writing good Verilog is a skill that develops over time. These practices will help you create more reliable, maintainable designs. Remember: **if it simulates correctly but doesn't synthesize, you're doing it wrong!**

Happy coding! 🚀
