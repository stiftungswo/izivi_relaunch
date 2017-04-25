<?php
/**
 * Author: Till Wegmüller
 * Date: 7/10/15
 * Dime
 */

namespace Money\Tests;


use Money\Currency;
use Money\Money;

class MoneyTest extends \PHPUnit_Framework_TestCase
{
	public function testRun()
	{
		$value       = 32.41;
		$money       = new Money(floatval($value), new Currency('CHF'));
		$stringmoney = new Money(strval($value), new Currency('CHF'));
		$nullmoney   = new Money(null, new Currency('CHF'));
		$nullmoney2  = new Money(0, new Currency('CHF'));
		$fourtimesmoney = $money->multiply(4);

		//Test Construction off Money class from float and string
		$this->assertEquals(3240, $money->getAmount());
		$this->assertInternalType('integer', $money->getAmount());
		$this->assertEquals(3240, $stringmoney->getAmount());
		$this->assertInternalType('integer', $stringmoney->getAmount());
		//Float and string should be the same value
		$this->assertEquals($money->getAmount(), $stringmoney->getAmount());
		$this->assertEquals(0, $nullmoney->getAmount());
		$this->assertEquals(0, $nullmoney2->getAmount());
		//null and 0 should both be 0
		$this->assertEquals($nullmoney2->getAmount(), $nullmoney->getAmount());

		//Test Multiply
		$this->assertEquals(12960, $fourtimesmoney->getAmount());

		//Test Division
		$this->assertEquals($money->getAmount(), $fourtimesmoney->divide(4)->getAmount());

		//Test Adding and Subracting Money
		$this->assertEquals(16200, $fourtimesmoney->add($money)->getAmount());
		$this->assertEquals(9720, $fourtimesmoney->subtract($money)->getAmount());

		//Test String Formating
		$this->assertEquals('32.40', $money->format());
		$this->assertEquals('129.60', $fourtimesmoney->format());
		$this->assertEquals('32.40 CHF', $money->format(true));
		$this->assertEquals('129.60 CHF', $fourtimesmoney->format(true));
		$this->assertEquals('0.00', $nullmoney->format());
		$this->assertEquals('0.00', $nullmoney2->format());
		$this->assertEquals($nullmoney2->format(), $nullmoney->format());
		$this->assertEquals('0.00 CHF', $nullmoney->format(true));
		$this->assertEquals('0.00 CHF', $nullmoney2->format(true));
	}
}