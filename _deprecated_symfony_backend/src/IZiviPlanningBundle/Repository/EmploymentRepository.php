<?php
namespace IZiviPlanningBundle\Repository;


use Doctrine\ORM\QueryBuilder;

class EmploymentRepository extends EntityRepository
{
    /**
     * @param string $text
     * @param QueryBuilder $qb
     *
     * @return QueryBuilder
     */
    public function search($text, QueryBuilder $qb = null)
    {
        return $this;
    }
}
